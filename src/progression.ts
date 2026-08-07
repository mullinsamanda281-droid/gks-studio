const STORAGE_KEY = 'stickarena.profile';
const XP_PER_KILL = 25;
const XP_HEADSHOT_BONUS = 15;
const XP_PER_WIN = 150;
const XP_PER_MATCH = 50;
const DAY_MS = 86400000;

export interface PlayerStats {
  kills: number; deaths: number; shotsFired: number; shotsHit: number;
  damageDealt: number; matchesPlayed: number; wins: number; bestCombo: number; playtimeSec: number;
}

export interface Profile {
  xp: number; level: number; stats: PlayerStats;
  unlocked: string[]; lastDailyReset: number; dailyProgress: Record<string, number>;
}

export interface Unlock { id: string; name: string; kind: 'color' | 'trail' | 'emote' | 'skin'; level: number }
export interface Challenge { id: string; desc: string; target: number; xp: number }

export const UNLOCKS: readonly Unlock[] = [
  { id: 'c_crimson', name: 'Crimson', kind: 'color', level: 2 },
  { id: 'c_neon', name: 'Neon', kind: 'color', level: 3 },
  { id: 'e_taunt', name: 'Taunt', kind: 'emote', level: 5 },
  { id: 't_fire', name: 'Fire Trail', kind: 'trail', level: 7 },
  { id: 'c_void', name: 'Void', kind: 'color', level: 10 },
  { id: 't_ice', name: 'Ice Trail', kind: 'trail', level: 12 },
  { id: 'e_dance', name: 'Dance', kind: 'emote', level: 15 },
  { id: 's_chrome', name: 'Chrome Stick', kind: 'skin', level: 18 },
  { id: 't_void', name: 'Void Trail', kind: 'trail', level: 20 },
  { id: 'e_flex', name: 'Flex', kind: 'emote', level: 25 },
  { id: 's_gold', name: 'Gold Stick', kind: 'skin', level: 30 },
  { id: 's_prismatic', name: 'Prismatic', kind: 'skin', level: 40 }
];

export const DAILY_CHALLENGES: readonly Challenge[] = [
  { id: 'd_kills', desc: 'Get 10 kills', target: 10, xp: 100 },
  { id: 'd_headshots', desc: 'Land 3 headshots', target: 3, xp: 120 },
  { id: 'd_win', desc: 'Win 1 match', target: 1, xp: 200 },
  { id: 'd_hits', desc: 'Land 50 hits', target: 50, xp: 80 },
  { id: 'd_combo', desc: 'Reach combo x3', target: 3, xp: 150 }
];

const freshStats = (): PlayerStats => ({
  kills: 0, deaths: 0, shotsFired: 0, shotsHit: 0,
  damageDealt: 0, matchesPlayed: 0, wins: 0, bestCombo: 0, playtimeSec: 0
});

const freshProfile = (): Profile => ({
  xp: 0, level: 1, stats: freshStats(),
  unlocked: [], lastDailyReset: Date.now(), dailyProgress: {}
});

export class Progression {
  profile: Profile;
  onLevelUp: ((level: number) => void) | null = null;

  constructor() {
    this.profile = this.load();
    this.checkDailyReset();
  }

  private load(): Profile {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return freshProfile();
      const parsed = JSON.parse(raw) as Partial<Profile>;
      return {
        xp: parsed.xp ?? 0,
        level: parsed.level ?? 1,
        stats: { ...freshStats(), ...(parsed.stats ?? {}) },
        unlocked: parsed.unlocked ?? [],
        lastDailyReset: parsed.lastDailyReset ?? Date.now(),
        dailyProgress: parsed.dailyProgress ?? {}
      };
    } catch {
      return freshProfile();
    }
  }

  save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(this.profile)); } catch { /* storage unavailable */ }
  }

  xpForLevel(n: number): number {
    return Math.round(100 * n * Math.pow(1.35, n - 1));
  }

  addXp(amount: number): boolean {
    this.profile.xp += amount;
    let leveled = false;
    while (this.profile.xp >= this.xpForLevel(this.profile.level)) {
      this.profile.xp -= this.xpForLevel(this.profile.level);
      this.profile.level++;
      leveled = true;
      this.grantUnlocks();
    }
    if (leveled) this.onLevelUp?.(this.profile.level);
    return leveled;
  }

  private grantUnlocks() {
    for (const u of UNLOCKS) {
      if (u.level <= this.profile.level && !this.profile.unlocked.includes(u.id)) {
        this.profile.unlocked.push(u.id);
      }
    }
  }

  private advance(id: string, amount = 1) {
    const challenge = DAILY_CHALLENGES.find(c => c.id === id);
    if (!challenge) return;
    const current = this.profile.dailyProgress[id] ?? 0;
    if (current >= challenge.target) return;
    const next = Math.min(challenge.target, current + amount);
    this.profile.dailyProgress[id] = next;
    if (next >= challenge.target) this.addXp(challenge.xp);
  }

  recordKill(isHeadshot: boolean, combo: number) {
    this.profile.stats.kills++;
    if (combo > this.profile.stats.bestCombo) this.profile.stats.bestCombo = combo;
    this.addXp(XP_PER_KILL + (isHeadshot ? XP_HEADSHOT_BONUS : 0));
    this.advance('d_kills');
    if (isHeadshot) this.advance('d_headshots');
    if (combo >= 3) this.advance('d_combo', 3);
    this.save();
  }

  recordDeath() {
    this.profile.stats.deaths++;
    this.save();
  }

  recordShot(hit: boolean, damage: number) {
    this.profile.stats.shotsFired++;
    if (!hit) return;
    this.profile.stats.shotsHit++;
    this.profile.stats.damageDealt += damage;
    this.advance('d_hits');
  }

  recordMatch(won: boolean, durationSec: number) {
    this.profile.stats.matchesPlayed++;
    this.profile.stats.playtimeSec += durationSec;
    if (won) { this.profile.stats.wins++; this.advance('d_win'); }
    this.addXp(XP_PER_MATCH + (won ? XP_PER_WIN : 0));
    this.save();
  }

  getAccuracy(): number {
    const { shotsFired, shotsHit } = this.profile.stats;
    return shotsFired === 0 ? 0 : shotsHit / shotsFired;
  }

  getKD(): number {
    const { kills, deaths } = this.profile.stats;
    return deaths === 0 ? kills : kills / deaths;
  }

  getUnlockedFor(level: number): Unlock[] {
    return UNLOCKS.filter(u => u.level <= level);
  }

  isUnlocked(id: string): boolean {
    return this.profile.unlocked.includes(id);
  }

  checkDailyReset() {
    if (Date.now() - this.profile.lastDailyReset < DAY_MS) return;
    this.profile.dailyProgress = {};
    this.profile.lastDailyReset = Date.now();
    this.save();
  }

  getDailyStatus() {
    return DAILY_CHALLENGES.map(c => {
      const progress = this.profile.dailyProgress[c.id] ?? 0;
      return { id: c.id, desc: c.desc, progress, target: c.target, done: progress >= c.target };
    });
  }

  xpToNextLevel(): number {
    return this.xpForLevel(this.profile.level) - this.profile.xp;
  }

  levelProgress(): number {
    const needed = this.xpForLevel(this.profile.level);
    return needed === 0 ? 0 : this.profile.xp / needed;
  }
}
