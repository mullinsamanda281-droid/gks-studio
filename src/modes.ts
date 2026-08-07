export type ModeId = 'ffa' | 'tdm' | 'gungame' | 'koth' | 'survival' | 'laststand';

export interface ModeState { id: ModeId; name: string; scoreLimit: number; timeLimit: number; respawns: boolean }

export const MODES: Record<ModeId, ModeState> = {
  ffa: { id: 'ffa', name: 'Free For All', scoreLimit: 25, timeLimit: 180, respawns: true },
  tdm: { id: 'tdm', name: 'Team Deathmatch', scoreLimit: 30, timeLimit: 240, respawns: true },
  gungame: { id: 'gungame', name: 'Gun Game', scoreLimit: 7, timeLimit: 300, respawns: true },
  koth: { id: 'koth', name: 'King of the Hill', scoreLimit: 100, timeLimit: 240, respawns: true },
  survival: { id: 'survival', name: 'Survival', scoreLimit: 0, timeLimit: 0, respawns: false },
  laststand: { id: 'laststand', name: 'Last Stick Standing', scoreLimit: 1, timeLimit: 120, respawns: false }
} as const;

export const HILL_CENTER = { x: 0, z: 0 } as const;
export const HILL_RADIUS = 4;

const HILL_RATE = 10;
const WEAPON_COUNT = 7;

export class GameMode {
  state: ModeState;
  playerScore = 0;
  enemyScore = 0;
  wave = 1;
  hillProgress = 0;
  gunLevel = 0;
  elapsed = 0;

  constructor(id: ModeId) { this.state = MODES[id]; }

  get name(): string { return this.state.name; }
  get respawns(): boolean { return this.state.respawns; }
  get timeLeft(): number { return this.state.timeLimit <= 0 ? Infinity : Math.max(0, this.state.timeLimit - this.elapsed); }

  onKill(byPlayer: boolean) {
    if (byPlayer) this.playerScore++;
    else this.enemyScore++;
    if (this.state.id === 'gungame') this.onGunGameKill(byPlayer);
  }

  private onGunGameKill(byPlayer: boolean) {
    if (!byPlayer) return;
    this.gunLevel = Math.min(WEAPON_COUNT - 1, this.gunLevel + 1);
  }

  nextWeapon(): number { return Math.min(WEAPON_COUNT - 1, this.gunLevel); }

  update(dt: number, playerInHill: boolean, aliveEnemies: number) {
    if (dt > 0) this.elapsed += dt;
    if (this.state.id === 'koth') this.updateHill(dt, playerInHill);
    if (this.state.id === 'survival') this.updateWave(aliveEnemies);
  }

  private updateHill(dt: number, playerInHill: boolean) {
    if (!playerInHill) return;
    this.hillProgress = Math.min(this.state.scoreLimit, this.hillProgress + HILL_RATE * dt);
  }

  private updateWave(aliveEnemies: number) {
    if (aliveEnemies > 0) return;
    this.wave++;
  }

  waveSpawnCount(): number { return 3 + this.wave * 2; }

  inHill(x: number, z: number): boolean {
    const dx = x - HILL_CENTER.x, dz = z - HILL_CENTER.z;
    return dx * dx + dz * dz <= HILL_RADIUS * HILL_RADIUS;
  }

  timeExpired(): boolean {
    if (this.state.timeLimit <= 0) return false;
    return this.elapsed >= this.state.timeLimit;
  }

  isOver(): boolean {
    if (this.timeExpired()) return true;
    switch (this.state.id) {
      case 'ffa': return this.playerScore >= this.state.scoreLimit;
      case 'tdm': return this.playerScore >= this.state.scoreLimit || this.enemyScore >= this.state.scoreLimit;
      case 'gungame': return this.gunLevel >= WEAPON_COUNT - 1 && this.playerScore >= this.state.scoreLimit;
      case 'koth': return this.hillProgress >= this.state.scoreLimit;
      case 'survival': return false;
      case 'laststand': return this.playerScore >= this.state.scoreLimit || this.enemyScore >= this.state.scoreLimit;
    }
  }

  getWinner(): string {
    if (!this.isOver()) return '';
    switch (this.state.id) {
      case 'tdm': return this.teamWinner();
      case 'gungame': return this.playerScore >= this.state.scoreLimit ? 'PLAYER' : 'NOBODY';
      case 'koth': return this.hillProgress >= this.state.scoreLimit ? 'PLAYER' : 'NOBODY';
      case 'survival': return 'NOBODY';
      case 'laststand': return this.playerScore >= this.state.scoreLimit ? 'PLAYER' : 'ENEMIES';
      case 'ffa': return this.scoreWinner();
    }
  }

  private teamWinner(): string {
    if (this.playerScore === this.enemyScore) return 'DRAW';
    return this.playerScore > this.enemyScore ? 'BLUE TEAM' : 'RED TEAM';
  }

  private scoreWinner(): string {
    if (this.playerScore === this.enemyScore) return 'DRAW';
    return this.playerScore > this.enemyScore ? 'PLAYER' : 'ENEMIES';
  }

  getObjectiveText(): string {
    switch (this.state.id) {
      case 'ffa': return `Kills: ${this.playerScore}/${this.state.scoreLimit}`;
      case 'tdm': return `Blue ${this.playerScore} - ${this.enemyScore} Red (to ${this.state.scoreLimit})`;
      case 'gungame': return `Weapon ${this.gunLevel + 1}/${WEAPON_COUNT}`;
      case 'koth': return `Hill: ${Math.floor(this.hillProgress)}/${this.state.scoreLimit}`;
      case 'survival': return `Wave ${this.wave}`;
      case 'laststand': return `Last Stick Standing`;
    }
  }

  reset() {
    this.playerScore = 0;
    this.enemyScore = 0;
    this.wave = 1;
    this.hillProgress = 0;
    this.gunLevel = 0;
    this.elapsed = 0;
  }
}
