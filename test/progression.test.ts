import { describe, it, expect, beforeEach } from 'vitest';
import { Progression, UNLOCKS, DAILY_CHALLENGES } from '../src/progression.js';

const store = new Map<string, string>();

beforeEach(() => {
  store.clear();
  globalThis.localStorage = {
    getItem: (k: string) => store.get(k) ?? null,
    setItem: (k: string, v: string) => { store.set(k, v); },
    removeItem: (k: string) => { store.delete(k); },
    clear: () => store.clear(),
    key: () => null,
    length: 0
  } as Storage;
});

describe('Progression setup', () => {
  it('starts a fresh profile at level 1', () => {
    const p = new Progression();
    expect(p.profile.level).toBe(1);
    expect(p.profile.xp).toBe(0);
    expect(p.profile.stats.kills).toBe(0);
  });

  it('requires more xp for each successive level', () => {
    const p = new Progression();
    expect(p.xpForLevel(2)).toBeGreaterThan(p.xpForLevel(1));
    expect(p.xpForLevel(10)).toBeGreaterThan(p.xpForLevel(9));
  });
});

describe('Stat tracking', () => {
  it('records kills and awards xp', () => {
    const p = new Progression();
    p.recordKill(false, 1);
    expect(p.profile.stats.kills).toBe(1);
    expect(p.profile.xp).toBeGreaterThan(0);
  });

  it('gives headshots bonus xp', () => {
    const plain = new Progression();
    plain.recordKill(false, 1);
    store.clear();
    const head = new Progression();
    head.recordKill(true, 1);
    expect(head.profile.xp).toBeGreaterThan(plain.profile.xp);
  });

  it('remembers the best combo', () => {
    const p = new Progression();
    p.recordKill(false, 4);
    p.recordKill(false, 2);
    expect(p.profile.stats.bestCombo).toBe(4);
  });

  it('computes accuracy without dividing by zero', () => {
    const p = new Progression();
    expect(p.getAccuracy()).toBe(0);
    p.recordShot(true, 10);
    p.recordShot(false, 0);
    expect(p.getAccuracy()).toBeCloseTo(0.5);
  });

  it('treats a deathless run as K/D equal to kills', () => {
    const p = new Progression();
    p.recordKill(false, 1);
    p.recordKill(false, 1);
    expect(p.getKD()).toBe(2);
  });
});

describe('Levelling and unlocks', () => {
  it('levels up after enough xp', () => {
    const p = new Progression();
    const leveled = p.addXp(p.xpForLevel(1) + 1);
    expect(leveled).toBe(true);
    expect(p.profile.level).toBeGreaterThan(1);
  });

  it('grants unlocks that match the new level', () => {
    const p = new Progression();
    p.addXp(999999);
    expect(p.profile.unlocked.length).toBeGreaterThan(0);
    for (const id of p.profile.unlocked) {
      const unlock = UNLOCKS.find(u => u.id === id);
      expect(unlock!.level).toBeLessThanOrEqual(p.profile.level);
    }
  });

  it('reports level progress between 0 and 1', () => {
    const p = new Progression();
    expect(p.levelProgress()).toBeGreaterThanOrEqual(0);
    expect(p.levelProgress()).toBeLessThanOrEqual(1);
  });
});

describe('Daily challenges', () => {
  it('lists every challenge with progress', () => {
    const p = new Progression();
    expect(p.getDailyStatus()).toHaveLength(DAILY_CHALLENGES.length);
  });

  it('advances the kill challenge as kills are recorded', () => {
    const p = new Progression();
    p.recordKill(false, 1);
    const kills = p.getDailyStatus().find(c => c.id === 'd_kills');
    expect(kills!.progress).toBe(1);
  });
});

describe('Persistence', () => {
  it('reloads a saved profile', () => {
    const first = new Progression();
    first.recordKill(false, 1);
    const saved = first.profile.stats.kills;
    expect(new Progression().profile.stats.kills).toBe(saved);
  });

  it('survives unavailable storage', () => {
    globalThis.localStorage = {
      getItem: () => { throw new Error('denied'); },
      setItem: () => { throw new Error('denied'); },
      removeItem: () => {}, clear: () => {}, key: () => null, length: 0
    } as unknown as Storage;
    expect(() => new Progression().recordKill(false, 1)).not.toThrow();
  });
});
