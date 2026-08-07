import { describe, it, expect } from 'vitest';
import { GameMode, MODES, HILL_RADIUS } from '../src/modes.js';

describe('MODES table', () => {
  it('defines every mode id with a name and limits', () => {
    for (const [id, mode] of Object.entries(MODES)) {
      expect(mode.id).toBe(id);
      expect(mode.name.length).toBeGreaterThan(0);
      expect(mode.scoreLimit).toBeGreaterThanOrEqual(0);
      expect(mode.timeLimit).toBeGreaterThanOrEqual(0);
    }
  });
});

describe('GameMode scoring', () => {
  it('tracks player and enemy kills separately', () => {
    const mode = new GameMode('ffa');
    mode.onKill(true);
    mode.onKill(true);
    mode.onKill(false);
    expect(mode.playerScore).toBe(2);
    expect(mode.enemyScore).toBe(1);
  });

  it('advances gun level only on player kills in gun game', () => {
    const mode = new GameMode('gungame');
    mode.onKill(false);
    expect(mode.gunLevel).toBe(0);
    mode.onKill(true);
    expect(mode.gunLevel).toBe(1);
  });

  it('never returns a weapon index beyond the arsenal', () => {
    const mode = new GameMode('gungame');
    for (let i = 0; i < 50; i++) mode.onKill(true);
    expect(mode.nextWeapon()).toBeLessThanOrEqual(6);
  });
});

describe('King of the Hill', () => {
  it('accrues progress only while the player holds the hill', () => {
    const mode = new GameMode('koth');
    mode.update(1, false, 3);
    expect(mode.hillProgress).toBe(0);
    mode.update(1, true, 3);
    expect(mode.hillProgress).toBeGreaterThan(0);
  });

  it('caps progress at the score limit', () => {
    const mode = new GameMode('koth');
    for (let i = 0; i < 200; i++) mode.update(1, true, 0);
    expect(mode.hillProgress).toBeLessThanOrEqual(MODES.koth.scoreLimit);
  });

  it('exposes a positive hill radius', () => {
    expect(HILL_RADIUS).toBeGreaterThan(0);
  });
});

describe('Survival waves', () => {
  it('advances the wave when all enemies are dead', () => {
    const mode = new GameMode('survival');
    expect(mode.wave).toBe(1);
    mode.update(0.016, false, 0);
    expect(mode.wave).toBe(2);
  });

  it('holds the wave while enemies remain', () => {
    const mode = new GameMode('survival');
    mode.update(0.016, false, 4);
    expect(mode.wave).toBe(1);
  });

  it('scales spawn count with wave number', () => {
    const mode = new GameMode('survival');
    const first = mode.waveSpawnCount();
    mode.update(0.016, false, 0);
    expect(mode.waveSpawnCount()).toBeGreaterThan(first);
  });
});

describe('Match completion', () => {
  it('is not over at kickoff', () => {
    expect(new GameMode('ffa').isOver()).toBe(false);
  });

  it('ends once the score limit is reached', () => {
    const mode = new GameMode('ffa');
    for (let i = 0; i < MODES.ffa.scoreLimit; i++) mode.onKill(true);
    expect(mode.isOver()).toBe(true);
    expect(mode.getWinner().length).toBeGreaterThan(0);
  });

  it('returns to a clean slate after reset', () => {
    const mode = new GameMode('ffa');
    for (let i = 0; i < 5; i++) mode.onKill(true);
    mode.reset();
    expect(mode.playerScore).toBe(0);
    expect(mode.enemyScore).toBe(0);
    expect(mode.isOver()).toBe(false);
  });

  it('produces objective text for every mode', () => {
    for (const id of Object.keys(MODES) as (keyof typeof MODES)[]) {
      expect(new GameMode(id).getObjectiveText().length).toBeGreaterThan(0);
    }
  });
});
