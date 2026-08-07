import * as THREE from 'three';
import * as R from '@dimforge/rapier3d';
import { PW, CG, G, RAY } from './physics.js';
import { Char } from './char.js';
import { Arena } from './world.js';
import { WMan, WCFG } from './combat.js';
import { Effects, AudioFX } from './fx.js';

class Input {
  keys = new Set<string>();
  st = { f: false, b: false, l: false, r: false, jump: false, sprint: false, dash: false, attack: false, aim: false };
  mouse = { x: 0, y: 0, locked: false };
  private up = (e: KeyboardEvent) => this.keys.add(e.code);
  private down = (e: KeyboardEvent) => this.keys.delete(e.code);
  init() {
    addEventListener('keydown', this.up); addEventListener('keyup', this.down);
    addEventListener('mousedown', (e) => { if (!this.mouse.locked && e.button === 0) document.body.requestPointerLock(); if (e.button === 0) this.st.attack = true; if (e.button === 2) this.st.aim = true; });
    addEventListener('mouseup', (e) => { if (e.button === 0) this.st.attack = false; if (e.button === 2) this.st.aim = false; });
    addEventListener('mousemove', (e) => { if (this.mouse.locked) { this.mouse.x += e.movementX * 0.002; this.mouse.y = Math.max(-1.2, Math.min(1.2, this.mouse.y + e.movementY * 0.002)); } });
    addEventListener('contextmenu', (e) => e.preventDefault());
    addEventListener('pointerlockchange', () => this.mouse.locked = document.pointerLockElement === document.body);
  }
  read() {
    this.st.f = this.keys.has('KeyW'); this.st.b = this.keys.has('KeyS');
    this.st.l = this.keys.has('KeyA'); this.st.r = this.keys.has('KeyD');
    this.st.jump = this.keys.has('Space'); this.st.sprint = this.keys.has('ShiftLeft');
    this.st.dash = this.keys.has('KeyE');
  }
}

class Player extends Char {
  jumps = 0; coyote = 0; dashT = 0; dashCd = 0; wallN = new THREE.Vector3(); canWall = false; jumpBuf = false; dashBuf = false;
  kills = 0; respawnP = { x: 0, y: 3, z: 0 };
  constructor(s: THREE.Scene, pw: PW, private input: Input, private cam: THREE.PerspectiveCamera, private fx: Effects, private audio: AudioFX) {
    super(s, pw, 0x4fc3f7, 0, 3, 0, G.P);
  }
  fix(dt: number) {
    if (!this.alive) { this.respawnT -= dt; if (this.respawnT <= 0) { this.teleport(this.respawnP.x, this.respawnP.y, this.respawnP.z); } return; }
    const pos = this.body.translation();
    this.grounded = this.isGrounded();
    if (this.grounded) { this.jumps = 0; this.coyote = 0.12; this.canWall = false; } else this.coyote -= dt;
    this.input.read();
    const i = this.input.st;
    let mx = 0, mz = 0;
    if (i.f) mz -= 1; if (i.b) mz += 1; if (i.l) mx -= 1; if (i.r) mx += 1;
    const wd = new THREE.Vector3(mx, 0, mz).normalize();
    const sin = Math.sin(this.yaw), cos = Math.cos(this.yaw);
    const sd = new THREE.Vector3(wd.x * cos - wd.z * sin, 0, wd.x * sin + wd.z * cos);
    const spd = i.sprint && this.grounded ? 12 : 8;
    const v = this.body.linvel();
    const k = 1 - Math.exp(-(this.grounded ? 12 : 3.5) * dt);
    this.body.setLinvel({ x: v.x + (sd.x * spd - v.x) * k, y: v.y, z: v.z + (sd.z * spd - v.z) * k }, true);
    if (i.jump && !this.jumpBuf) this.jumpBuf = true;
    if (i.dash && !this.dashBuf) this.dashBuf = true;
    if (this.jumpBuf) {
      this.jumpBuf = false;
      if (this.grounded || this.coyote > 0) { this.body.setLinvel({ x: v.x, y: 9, z: v.z }, true); this.grounded = false; this.coyote = 0; this.fx.dust(this.body.translation()); this.audio.play('jump'); }
      else if (this.jumps < 1) { this.jumps++; this.body.setLinvel({ x: v.x, y: 8.5, z: v.z }, true); this.fx.dust(this.body.translation()); this.audio.play('jump'); }
      else if (this.canWall) { this.body.setLinvel({ x: -this.wallN.x * 12, y: 9.9, z: -this.wallN.z * 12 }, true); this.canWall = false; this.audio.play('jump'); }
    }
    if (this.dashBuf && this.dashCd <= 0) {
      this.dashBuf = false;
      const d = new THREE.Vector3(mx, 0, mz);
      if (d.lengthSq() === 0) d.set(sin, 0, cos);
      d.normalize();
      const dd = new THREE.Vector3(d.x * cos - d.z * sin, 0, d.x * sin + d.z * cos).multiplyScalar(20);
      dd.y = v.y * 0.5;
      this.body.setLinvel(dd, true); this.dashT = 0.18; this.dashCd = 0.6;
      this.fx.dash(this.body.translation()); this.audio.play('dash');
    }
    if (this.dashT > 0) { this.dashT -= dt; if (this.dashT <= 0) { const v2 = this.body.linvel(); this.body.setLinvel({ x: v2.x * 0.5, y: v2.y * 0.3, z: v2.z * 0.5 }, true); } }
    this.dashCd -= dt;
    if (!this.grounded) {
      const speed = Math.hypot(v.x, v.z);
      if (speed >= 3) {
        const dir = new THREE.Vector3(v.x, 0, v.z).normalize();
        const hit = this.pw.ray(this.pos, dir, 0.7, G.W);
        if (hit) {
          this.canWall = true; this.wallN.copy(dir).negate();
          if (v.y < 0) this.body.setLinvel({ x: v.x, y: v.y * 0.6, z: v.z }, true);
        } else this.canWall = false;
      } else this.canWall = false;
    }
    const lv = this.body.linvel();
    const lim = 30, mm = Math.max(Math.abs(lv.x), Math.abs(lv.z));
    if (mm > lim) { const s = lim / mm; this.body.setLinvel({ x: lv.x * s, y: lv.y, z: lv.z * s }, true); }
    this.sync();
  }
  up(dt: number) {
    if (this.input.mouse.locked) { this.yaw += this.input.mouse.x; this.pitch += this.input.mouse.y; this.pitch = Math.max(-1.2, Math.min(1.2, this.pitch)); }
    const p = this.body.translation();
    const e = new THREE.Vector3(p.x + Math.sin(this.yaw + Math.PI / 2) * 0.4, p.y + 1.1, p.z + Math.cos(this.yaw + Math.PI / 2) * 0.4);
    const ct = new THREE.Vector3(p.x - Math.sin(this.yaw) * Math.cos(this.pitch) * 6, p.y + 1.3 + Math.sin(this.pitch) * 6, p.z - Math.cos(this.yaw) * Math.cos(this.pitch) * 6);
    this.cam.position.lerp(ct, 1 - Math.exp(-10 * dt));
    this.cam.lookAt(e);
    this.pos.set(p.x, p.y, p.z);
  }
  pitch = 0;
  override die() { super.die(); this.respawnT = 1; }
}

class Enemy extends Char {
  state = 'idle'; stT = 0; lastSeen = -999; fireCd = 0; patrol = new THREE.Vector3(); strafeDir = 1; strafeT = 0; stuck = 0;
  lastPos = new THREE.Vector3();
  constructor(s: THREE.Scene, pw: PW, private player: Player, private fx: Effects, private audio: AudioFX, x: number, z: number, public diff = 1) {
    super(s, pw, 0xe74c3c, x, 3, z, G.E);
    this.patrol.set(x, 0, z); this.stT = Math.random() * 1.5;
  }
  fix(dt: number) {
    if (!this.alive) { this.respawnT -= dt; return; }
    this.stT -= dt; this.fireCd -= dt; this.stuck += dt;
    const p = this.body.translation();
    this.grounded = this.isGrounded();
    const pp = this.player.body.translation();
    const dist = Math.hypot(pp.x - p.x, pp.z - p.z);
    const see = this.canSee(p, pp, dist);
    if (see) this.lastSeen = performance.now();
    const seenFor = (performance.now() - this.lastSeen) / 1000;
    const low = this.hp < 30;
    const v = this.body.linvel();
    const spd = 5 + this.diff * 1.5;
    switch (this.state) {
      case 'idle':
        if (see) this.state = 'attack';
        else if (this.stT <= 0) { this.state = 'patrol'; this.patrol.set(p.x + (Math.random() - 0.5) * 20, 0, p.z + (Math.random() - 0.5) * 20); this.stT = 3 + Math.random() * 3; }
        break;
      case 'patrol':
        if (see) this.state = 'attack';
        else if (this.stT <= 0) { this.state = 'idle'; this.stT = Math.random() * 2; }
        else this.moveTo(this.patrol, spd, dt, p);
        break;
      case 'attack':
        if (!see && seenFor > 2) { this.state = 'patrol'; this.stT = 4; this.patrol.set(pp.x, 0, pp.z); }
        else if (low) { this.state = 'retreat'; this.stT = 2.5; }
        else {
          this.yaw = Math.atan2(pp.x - p.x, pp.z - p.z);
          this.moveTo(new THREE.Vector3(pp.x, 0, pp.z), spd * 0.8, dt, p);
          if (this.fireCd <= 0 && dist < 25) this.shoot(pp, p), this.fireCd = (1 - this.diff * 0.15) * (0.7 + Math.random() * 0.6);
          if (Math.random() < 0.02) this.body.setLinvel({ x: v.x, y: 7, z: v.z }, true);
        }
        break;
      case 'retreat':
        if (this.stT <= 0 || this.hp > 60) this.state = 'attack';
        else { const dx = p.x - pp.x, dz = p.z - pp.z, d = Math.hypot(dx, dz) || 1; this.yaw = Math.atan2(-dx, -dz); this.body.setLinvel({ x: (dx / d) * spd * 1.2, y: v.y, z: (dz / d) * spd * 1.2 }, true); }
        break;
    }
    this.sync();
    if (this.stuck > 2) {
      const c = this.body.translation();
      if (Math.hypot(c.x - this.lastPos.x, c.z - this.lastPos.z) < 0.3) this.body.setLinvel({ x: Math.sin(this.yaw + 1.57) * 5, y: 4, z: Math.cos(this.yaw + 1.57) * 5 }, true);
      this.stuck = 0; this.lastPos.set(c.x, c.y, c.z);
    }
  }
  private moveTo(t: THREE.Vector3, spd: number, dt: number, p: any) {
    const dx = t.x - p.x, dz = t.z - p.z, d = Math.hypot(dx, dz);
    if (d < 0.5) return;
    const v = this.body.linvel(), k = 1 - Math.exp(-8 * dt);
    this.body.setLinvel({ x: v.x + ((dx / d) * spd - v.x) * k, y: v.y, z: v.z + ((dz / d) * spd - v.z) * k }, true);
  }
  private shoot(pp: any, p: any) {
    const acc = 0.65 + this.diff * 0.25;
    const dir = new THREE.Vector3(pp.x - p.x + (Math.random() - 0.5) * (1 - acc) * 6, pp.y - p.y + (Math.random() - 0.5) * (1 - acc) * 4, pp.z - p.z + (Math.random() - 0.5) * (1 - acc) * 6).normalize();
    const o = new THREE.Vector3(p.x, p.y + 1, p.z);
    const hit = this.pw.ray(o, dir, 60, G.P | G.W | G.R);
    this.fx.flash(o, dir);
    this.fx.trail(o, hit ? this.pw.hp(o, dir, hit) : o.clone().add(dir.clone().multiplyScalar(60)));
    this.audio.play('shot', 0.4);
    if (hit && (hit as any).collider?.rigidBody === this.player.body) this.player.hp -= 10 * this.diff;
  }
  private canSee(p: any, pp: any, dist: number): boolean {
    if (dist > 30 || !this.player.alive) return false;
    const facing = new THREE.Vector3(Math.sin(this.yaw), 0, Math.cos(this.yaw));
    const to = new THREE.Vector3(pp.x - p.x, 0, pp.z - p.z).normalize();
    if (Math.acos(THREE.MathUtils.clamp(facing.dot(to), -1, 1)) * (180 / Math.PI) > 40) return false;
    return !this.pw.ray(new THREE.Vector3(p.x, p.y + 1, p.z), new THREE.Vector3(pp.x - p.x, pp.y - p.y, pp.z - p.z).normalize(), dist, G.W);
  }
}

class Match {
  time = 180; over = false; winner = ''; score = 0; combo = 0; comboT = 0;
  constructor(private game: Game) {}
  kill(e: Enemy) { this.score += 100; this.combo = Math.min(5, this.combo + 1); this.comboT = 5; this.game.fx.addShake(0.3 + this.combo * 0.15); this.game.player.kills++; this.game.audio.play('death', 0.3); this.game.ui.kill(`You killed Bot`); }
  fix(dt: number) { if (this.over) return; this.time -= dt; if (this.comboT > 0) this.comboT -= dt; if (this.comboT <= 0) this.combo = 0; if (this.time <= 0) this.end(); }
  end() { if (this.over) return; this.over = true; this.winner = this.score > 0 ? 'PLAYER' : 'NOBODY'; this.game.audio.play('cheer'); this.game.ui.end(this.winner, this.score); }
  restart() { this.over = false; this.time = 180; this.score = 0; this.combo = 0; this.comboT = 0; this.game.player.teleport(0, 3, 0); this.game.ui.hideEnd(); }
}

class UI {
  private h = document.getElementById('healthFill')!; private a = document.getElementById('ammoDisplay')!;
  private w = document.getElementById('weaponName')!; private t = document.getElementById('timer')!;
  private kf = document.getElementById('killFeed')!; private cb = document.getElementById('comboDisplay')!;
  private me = document.getElementById('matchEnd')!; private wt = document.getElementById('winnerText')!;
  private rb = document.getElementById('restartBtn')!;
  private flash: HTMLElement;
  constructor(private game: Game) {
    this.flash = document.createElement('div');
    this.flash.style.cssText = 'position:fixed;inset:0;background:rgba(255,0,0,0.3);pointer-events:none;opacity:0;z-index:150;';
    document.body.appendChild(this.flash);
    this.rb.onclick = () => game.match.restart();
  }
  kill(text: string) { const e = document.createElement('div'); e.textContent = text; this.kf.prepend(e); setTimeout(() => e.remove(), 3000); }
  end(w: string, s: number) { this.wt.textContent = `${w} WINS! Score: ${s}`; this.me.classList.add('show'); }
  hideEnd() { this.me.classList.remove('show'); }
  up(dt: number) {
    const pl = this.game.player;
    this.h.style.width = `${Math.max(0, pl.hp)}%`;
    this.h.style.background = pl.hp > 50 ? '#2ecc71' : pl.hp > 25 ? '#f39c12' : '#e74c3c';
    this.flash.style.opacity = pl.hp < 35 ? '0.3' : '0';
    const w = this.game.wm.current;
    if (w) { this.a.textContent = w.cfg.melee ? '∞ / ∞' : `${w.ammo} / ${WCFG[w.cfg.n as keyof typeof WCFG].a}`; this.w.textContent = w.cfg.n; }
    const m = this.game.match.time;
    this.t.textContent = `${Math.floor(Math.max(0, m) / 60)}:${Math.floor(Math.max(0, m) % 60).toString().padStart(2, '0')}`;
    if (this.game.match.combo >= 2) { this.cb.textContent = `COMBO x${this.game.match.combo}`; this.cb.style.opacity = '1'; } else this.cb.style.opacity = '0';
  }
}

export class Game {
  pw = new PW(); audio = new AudioFX();
  fx!: Effects;
  player!: Player; wm!: WMan; match!: Match; ui!: UI;
  private scene = new THREE.Scene(); private cam!: THREE.PerspectiveCamera; private input = new Input();
  private renderer!: THREE.WebGLRenderer; private enemies: Enemy[] = [];
  private clock = new THREE.Clock(); private acc = 0;
  private killed(e: Enemy) { this.match.kill(e); this.fx.death(e.body.translation()); }
  async init() {
    this.renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas') as HTMLCanvasElement, antialias: true, powerPreference: 'high-performance' });
    this.renderer.setSize(innerWidth, innerHeight); this.renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true; this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping; this.renderer.toneMappingExposure = 1.2;
    this.scene.background = new THREE.Color(0x1a1a2e); this.scene.fog = new THREE.Fog(0x1a1a2e, 30, 80);
    this.cam = new THREE.PerspectiveCamera(70, innerWidth / innerHeight, 0.1, 200); this.cam.position.set(0, 5, 10);
    const amb = new THREE.AmbientLight(0xffffff, 0.5); this.scene.add(amb);
    const sun = new THREE.DirectionalLight(0xffffee, 1.5); sun.position.set(30, 50, 20); sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048); sun.shadow.camera.left = sun.shadow.camera.bottom = -40; sun.shadow.camera.right = sun.shadow.camera.top = 40;
    this.scene.add(sun);
    const fill = new THREE.DirectionalLight(0x88aaff, 0.3); fill.position.set(-20, 20, -20); this.scene.add(fill);
    await this.audio.init();
    this.pw.init();
    this.input.init();
    this.fx = new Effects(this.scene);
    new Arena(this.scene, this.pw).build();
    this.player = new Player(this.scene, this.pw, this.input, this.cam, this.fx, this.audio);
    this.match = new Match(this);
    this.ui = new UI(this);
    const arenaSpawns = (this.scene as any).userData.arena.spawns;
    this.wm = new WMan(this.scene, this.pw, this.player, this.fx, this.audio, this.targets());
    this.wm.onPickup = (n) => { this.ui.kill(`Picked up ${n}`); this.audio.play('pickup'); };
    this.wm.init();
    for (let i = 0; i < 6; i++) {
      const sp = arenaSpawns[Math.floor(Math.random() * arenaSpawns.length)];
      this.enemies.push(new Enemy(this.scene, this.pw, this.player, this.fx, this.audio, sp.x, sp.z, 1 + Math.random() * 0.6));
    }
    addEventListener('resize', () => { this.cam.aspect = innerWidth / innerHeight; this.cam.updateProjectionMatrix(); this.renderer.setSize(innerWidth, innerHeight); });
    this.loop();
  }
  private targets(): Char[] { return [this.player, ...this.enemies]; }
  private loop = () => {
    requestAnimationFrame(this.loop);
    const dt = Math.min(this.clock.getDelta(), 0.1);
    this.acc += dt;
    while (this.acc >= 1 / 60) {
      this.pw.step();
      this.player.fix(1 / 60);
      for (const e of this.enemies) e.fix(1 / 60);
      for (let i = this.enemies.length - 1; i >= 0; i--) {
        const e = this.enemies[i]!;
        if (!e.alive && e.hp <= 0 && !e.dying) { e.dying = true; e.die(); this.killed(e); }
        if (!e.alive && e.respawnT <= 0) { const sp = (this.scene as any).userData.arena.spawns[Math.floor(Math.random() * (this.scene as any).userData.arena.spawns.length)]; e.teleport(sp.x, sp.y, sp.z); e.dying = false; }
      }
      if (this.player.alive && this.player.hp <= 0) this.player.die();
      this.match.fix(1 / 60);
      this.acc -= 1 / 60;
    }
    this.player.up(dt);
    const i = this.input.st;
    if (i.attack && this.player.alive) {
      const dir = new THREE.Vector3(); this.cam.getWorldDirection(dir);
      const p = this.player.body.translation();
      if (this.wm.fire(dir, new THREE.Vector3(p.x, p.y + 1, p.z))) i.attack = false;
    }
    this.wm.update(dt);
    this.fx.update(dt);
    this.ui.up(dt);
    const s = this.fx.shake;
    if (s > 0) this.cam.position.add(new THREE.Vector3((Math.random() - 0.5) * s * 0.15, (Math.random() - 0.5) * s * 0.15, 0));
    this.renderer.render(this.scene, this.cam);
  };
}
