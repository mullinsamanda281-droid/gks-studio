import * as THREE from 'three';
import { WCFG, WType } from './combat.js';
import { Game } from './game.js';

export class Match {
  time = 180;
  over = false;
  winner = '';
  score = 0;
  combo = 0;
  comboTimer = 0;

  constructor(private game: Game) {}

  registerKill() {
    this.score += 100;
    this.combo = Math.min(5, this.combo + 1);
    this.comboTimer = 5;
    this.game.fx.shake(0.3 + this.combo * 0.15, 0.3);
    this.game.player.kills++;
    this.game.fx.comboFlash(this.combo);
    this.game.audio.play('death', 0.3);
    this.game.ui.logKill(this.combo);
  }

  update(dt: number) {
    if (this.over) return;
    this.time -= dt;
    if (this.comboTimer > 0) this.comboTimer -= dt;
    if (this.comboTimer <= 0) this.combo = 0;
    if (this.time <= 0) this.endMatch();
  }

  private endMatch() {
    if (this.over) return;
    this.over = true;
    this.winner = this.score > 0 ? 'PLAYER' : 'NOBODY';
    this.game.audio.play('cheer');
    this.game.fx.slowMotion(0.3, 0.5);
    this.game.progression.recordMatch(this.winner === 'PLAYER', 180 - Math.max(0, this.time));
    this.game.ui.showMatchEnd(this.winner, this.score);
  }

  restart() {
    this.over = false; this.time = 180; this.score = 0; this.combo = 0; this.comboTimer = 0;
    this.game.player.teleport(0, 3, 0); this.game.ui.hideMatchEnd(); this.game.ui.clearLog();
  }
}

export class UI {
  private healthBar: HTMLElement;
  private ammoText: HTMLElement;
  private weaponName: HTMLElement;
  private timerText: HTMLElement;
  private killFeed: HTMLElement;
  private comboText: HTMLElement;
  private endScreen: HTMLElement;
  private endTitle: HTMLElement;
  private restartBtn: HTMLElement;
  private damageOverlay: HTMLElement;

  constructor(private game: Game) {
    this.healthBar = document.getElementById('healthFill')!;
    this.ammoText = document.getElementById('ammoDisplay')!;
    this.weaponName = document.getElementById('weaponName')!;
    this.timerText = document.getElementById('timer')!;
    this.killFeed = document.getElementById('killFeed')!;
    this.comboText = document.getElementById('comboDisplay')!;
    this.endScreen = document.getElementById('matchEnd')!;
    this.endTitle = document.getElementById('winnerText')!;
    this.restartBtn = document.getElementById('restartBtn')!;
    this.damageOverlay = document.createElement('div');
    this.damageOverlay.style.cssText = 'position:fixed;inset:0;background:rgba(255,0,0,0.3);pointer-events:none;opacity:0;z-index:150;';
    document.body.appendChild(this.damageOverlay);
    this.restartBtn.onclick = () => this.game.match.restart();
  }

  logKill(combo: number) {
    const entry = document.createElement('div');
    entry.textContent = combo > 1 ? `Kill! COMBO x${combo}` : 'Kill!';
    this.killFeed.prepend(entry);
    setTimeout(() => entry.remove(), 3000);
  }

  showMatchEnd(winner: string, score: number) {
    const p = this.game.progression;
    const acc = Math.round(p.getAccuracy() * 100);
    const kd = p.getKD().toFixed(2);
    this.endTitle.innerHTML = `${winner} WINS!<br><span style="font-size:18px;opacity:0.85">` +
      `Score ${score} &nbsp;·&nbsp; Kills ${p.profile.stats.kills} &nbsp;·&nbsp; ` +
      `Accuracy ${acc}% &nbsp;·&nbsp; K/D ${kd} &nbsp;·&nbsp; Level ${p.profile.level}</span>`;
    this.endScreen.classList.add('show');
  }

  showDamageFrom(worldDir: THREE.Vector3, camYaw: number) {
    const angle = Math.atan2(worldDir.x, worldDir.z) - camYaw;
    const arrow = document.createElement('div');
    arrow.textContent = '▲';
    arrow.style.cssText = [
      'position:fixed', 'left:50%', 'top:50%', 'color:#ff3b3b', 'font-size:34px',
      'pointer-events:none', 'z-index:140', 'transition:opacity .6s',
      `transform:rotate(${angle}rad) translate(-50%,-160px)`
    ].join(';');
    document.body.appendChild(arrow);
    setTimeout(() => { arrow.style.opacity = '0'; }, 250);
    setTimeout(() => arrow.remove(), 900);
  }
  hideMatchEnd() { this.endScreen.classList.remove('show'); }
  clearLog() { this.killFeed.innerHTML = ''; }

  update(dt: number) {
    const player = this.game.player;
    const hp = Math.max(0, player.hp);
    this.healthBar.style.width = `${hp}%`;
    this.healthBar.style.background = hp > 50 ? '#2ecc71' : hp > 25 ? '#f39c12' : '#e74c3c';
    this.damageOverlay.style.opacity = hp < 35 ? '0.3' : '0';
    const weapon = this.game.wm.current;
    if (weapon) {
      const cfg = weapon.cfg;
      const ammo = cfg.melee ? 'Inf' : String(weapon.ammo);
      const def = WCFG[cfg.n as WType];
      const max = cfg.melee ? 'Inf' : String(def?.a ?? 'Inf');
      this.ammoText.textContent = cfg.melee ? 'Inf / Inf' : `${ammo} / ${max}`;
      this.weaponName.textContent = cfg.n;
    }
    const t = this.game.match.time;
    this.timerText.textContent = `${Math.floor(Math.max(0, t) / 60)}:${Math.floor(Math.max(0, t) % 60).toString().padStart(2, '0')}`;
    const combo = this.game.fx.getComboText();
    if (combo) { this.comboText.textContent = combo; this.comboText.style.opacity = '1'; }
    else this.comboText.style.opacity = '0';
  }
}
