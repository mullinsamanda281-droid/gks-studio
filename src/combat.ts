import * as THREE from 'three';
import * as R from '@dimforge/rapier3d';
import { PW, CG, G } from './physics.js';
import { Char } from './char.js';
import { Effects } from './fx.js';

export type WType = 'pistol' | 'shotgun' | 'smg' | 'rifle' | 'sword' | 'rocket' | 'grenade';
export interface WCfg { n: string; d: number; r: number; a: number; rpm: number; sp: number; kb: number; melee: boolean; ps: number; er: number; c: number; recoil: number; reloadTime: number }
export const WCFG: Record<WType, WCfg> = {
  pistol: { n: 'Pistol', d: 20, r: 50, a: 12, rpm: 4, sp: 0.02, kb: 6, melee: false, ps: 0, er: 0, c: 0xcccccc, recoil: 0.02, reloadTime: 1.2 },
  shotgun: { n: 'Shotgun', d: 12, r: 20, a: 6, rpm: 1.2, sp: 0.12, kb: 16, melee: false, ps: 0, er: 0, c: 0xc0392b, recoil: 0.08, reloadTime: 2.0 },
  smg: { n: 'SMG', d: 10, r: 35, a: 40, rpm: 12, sp: 0.06, kb: 4, melee: false, ps: 0, er: 0, c: 0x2ecc71, recoil: 0.03, reloadTime: 1.5 },
  rifle: { n: 'Rifle', d: 15, r: 45, a: 30, rpm: 7, sp: 0.035, kb: 5, melee: false, ps: 0, er: 0, c: 0x3498db, recoil: 0.04, reloadTime: 1.8 },
  sword: { n: 'Sword', d: 35, r: 2.5, a: Infinity, rpm: 2.2, sp: 0, kb: 10, melee: true, ps: 0, er: 0, c: 0xf39c12, recoil: 0, reloadTime: 0 },
  rocket: { n: 'Rocket', d: 50, r: 60, a: 4, rpm: 0.8, sp: 0.005, kb: 25, melee: false, ps: 28, er: 6, c: 0xe74c3c, recoil: 0.06, reloadTime: 2.5 },
  grenade: { n: 'Grenade', d: 50, r: 40, a: 4, rpm: 0.8, sp: 0.005, kb: 20, melee: false, ps: 18, er: 5, c: 0x9b59b6, recoil: 0.05, reloadTime: 2.0 }
};

export abstract class BaseWeapon {
  ammo: number; last = -999; mesh: THREE.Group;
  onFire: (() => void) | null = null;
  onHit: ((t: Char) => void) | null = null;
  onEmpty: (() => void) | null = null;
  recoilAccum = 0;
  constructor(public cfg: WCfg, protected s: THREE.Scene, protected pw: PW, protected owner: Char, protected fx: Effects, protected audio: any) {
    this.ammo = cfg.a; this.mesh = this.mkMesh();
  }
  abstract fire(t: number, dir: THREE.Vector3, o: THREE.Vector3, targets: Char[]): boolean;
  abstract getType(): string;
  protected canFire(t: number): boolean { return t - this.last >= 1 / this.cfg.rpm; }
  protected applyRecoil() { this.recoilAccum = Math.min(this.recoilAccum + this.cfg.recoil, 0.3); }
  protected mkMesh(): THREE.Group {
    const g = new THREE.Group(), m = new THREE.MeshStandardMaterial({ color: this.cfg.c, roughness: 0.4, metalness: 0.3 });
    if (this.cfg.melee) {
      const b = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 1.4), m); b.position.z = -0.7; g.add(b);
      const gr = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.3, 6), m); gr.rotation.x = Math.PI / 2; g.add(gr);
    } else {
      const b = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.14, 0.6), m); g.add(b);
      const br = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.4, 8), new THREE.MeshStandardMaterial({ color: 0x333333 }));
      br.rotation.x = Math.PI / 2; br.position.z = -0.5; g.add(br);
      if (this.cfg.er > 0) { const t = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.8, 10), new THREE.MeshStandardMaterial({ color: 0x7f8c8d, metalness: 0.6 })); t.rotation.x = Math.PI / 2; g.add(t); }
    }
    return g;
  }
}

export class Weapon extends BaseWeapon {
  comboCount = 0; comboTimer = 0; comboKbMult = 1;
  onCombo: ((count: number) => void) | null = null;
  getType() { return this.cfg.n; }

  fire(t: number, dir: THREE.Vector3, o: THREE.Vector3, targets: Char[]): boolean {
    if (!this.canFire(t)) return false;
    if (!this.cfg.melee && this.ammo <= 0) { this.audio.play('empty'); this.onEmpty?.(); return false; }
    this.last = t;
    const ok = this.cfg.melee ? this.melee(dir, o, targets) : this.cfg.ps > 0 ? this.projectile(dir, o, targets) : this.hitscan(dir, o, targets);
    if (ok && !this.cfg.melee) this.ammo--;
    if (ok) { this.applyRecoil(); this.onFire?.(); this.fx.flash(o, dir); this.audio.play('shot'); }
    return ok;
  }

  private hitscan(dir: THREE.Vector3, o: THREE.Vector3, targets: Char[]) {
    const { d, r, sp } = this.cfg, pellets = this.cfg.c === 0xc0392b ? 8 : 1;
    let hitAny = false;
    for (let i = 0; i < pellets; i++) {
      const dd = dir.clone();
      if (sp) { dd.x += (Math.random() - 0.5) * sp * 2; dd.y += (Math.random() - 0.5) * sp * 2; dd.z += (Math.random() - 0.5) * sp * 2; dd.normalize(); }
      const hit = this.pw.ray(o, dd, r, G.E | G.W | G.P | G.R);
      const end = hit ? this.pw.hp(o, dd, hit) : o.clone().add(dd.clone().multiplyScalar(r));
      this.fx.trail(o, end);
      if (hit) {
        const rb = (hit as any).collider?.rigidBody;
        let enemyHit = false;
        for (const tgt of targets) if (rb === tgt.body) { tgt.hp -= d; this.onHit?.(tgt); hitAny = true; enemyHit = true; }
        this.fx.impact(end, dd, enemyHit ? 'enemy' : 'concrete');
      }
    }
    return true;
  }

  private projectile(dir: THREE.Vector3, o: THREE.Vector3, targets: Char[]) {
    const isGrenade = this.cfg.c === 0x9b59b6;
    const b = this.pw.body(R.RigidBodyDesc.dynamic().setTranslation(o.x, o.y, o.z).setLinvel(dir.x * this.cfg.ps, dir.y * this.cfg.ps, dir.z * this.cfg.ps).setCcdEnabled(true).setGravityScale(isGrenade ? 1 : 0));
    this.pw.col(R.ColliderDesc.ball(0.15).setRestitution(isGrenade ? 0.4 : 0.2).setCollisionGroups(CG(G.R, G.W | G.E | G.P | G.R)), b);
    const mat = new THREE.MeshStandardMaterial({ color: isGrenade ? 0x9b59b6 : 0xff5722, emissive: isGrenade ? 0x9b59b6 : 0xff5722, emissiveIntensity: 0.5 });
    const m = new THREE.Mesh(new THREE.SphereGeometry(0.15, 6, 6), mat);
    this.s.add(m); const st = performance.now();
    const tick = () => {
      const p = b.translation(); m.position.set(p.x, p.y, p.z);
      const elapsed = (performance.now() - st) / 1000;
      const near = targets.map(c => ({ c, d: Math.hypot(c.body.translation().x - p.x, c.body.translation().y - p.y, c.body.translation().z - p.z) })).find(t => t.d < 1.2);
      const wallHit = this.pw.ray(new THREE.Vector3(p.x, p.y, p.z), dir, 1.5, G.E | G.W | G.R);
      if (near || wallHit || elapsed > (isGrenade ? 2.5 : 3)) {
        this.explode(new THREE.Vector3(p.x, p.y, p.z), this.cfg.er, targets);
        this.s.remove(m); this.pw.rm(b); return;
      }
      requestAnimationFrame(tick);
    };
    tick();
    return true;
  }

  private melee(dir: THREE.Vector3, o: THREE.Vector3, targets: Char[]) {
    if (this.comboTimer <= 0) this.comboCount = 0;
    this.comboCount = (this.comboCount % 3) + 1;
    this.comboTimer = 1.5;
    this.comboKbMult = 1 + (this.comboCount - 1) * 0.2;
    const dmg = this.comboCount === 1 ? 35 : this.comboCount === 2 ? 45 : 60;
    const hit = this.pw.ray(o, dir, this.cfg.r, G.E | G.P);
    if (hit) {
      const rb = (hit as any).collider?.rigidBody;
      for (const tgt of targets) if (rb === tgt.body) { tgt.hp -= dmg; this.fx.impact(this.pw.hp(o, dir, hit), dir, 'enemy'); this.onHit?.(tgt); }
    }
    this.fx.slash(o, dir, this.cfg.r * (1 + this.comboCount * 0.15));
    this.onCombo?.(this.comboCount);
    return true;
  }

  update(dt: number) {
    if (this.comboTimer > 0) {
      this.comboTimer -= dt;
      if (this.comboTimer <= 0) { this.comboCount = 0; this.onCombo?.(0); }
    }
  }

  explode(pos: THREE.Vector3, radius: number, targets: Char[]) {
    this.fx.explode(pos, radius); this.audio.play('explosion');
    for (const t of targets) {
      const p = t.body.translation();
      const d = Math.hypot(p.x - pos.x, p.y - pos.y, p.z - pos.z);
      if (d < radius) {
        const f = 1 - d / radius; t.hp -= this.cfg.d * f;
        const away = new THREE.Vector3(p.x - pos.x, p.y - pos.y, p.z - pos.z).normalize();
        t.body.applyImpulse({ x: away.x * this.cfg.kb * f, y: away.y * this.cfg.kb * f + 2, z: away.z * this.cfg.kb * f }, true);
      }
    }
  }
}

export class WMan {
  weapons: Weapon[] = []; idx = 0; drops: { x: number; z: number; t: WType; timer: number }[] = [];
  onPickup: ((n: string) => void) | null = null;
  onSwitch: ((n: string) => void) | null = null;
  onRecoil: ((r: number) => void) | null = null;
  constructor(private s: THREE.Scene, private pw: PW, private player: Char, private fx: Effects, private audio: any, private targets: Char[]) {}

  init() {
    const spots: [number, number][] = [[-10, -10], [10, -10], [-10, 10], [10, 10], [0, 0], [-16, 0], [16, 0], [0, -16], [0, 16]];
    (['pistol', 'shotgun', 'smg', 'rifle', 'sword', 'rocket', 'grenade'] as WType[]).forEach((t, i) => { if (spots[i]) this.drops.push({ x: spots[i]![0], z: spots[i]![1], t, timer: 0 }); });
    const all: WType[] = ['pistol', 'shotgun', 'smg', 'rifle', 'sword', 'rocket', 'grenade'];
    all.forEach(t => this.weapons.push(new Weapon(WCFG[t], this.s, this.pw, this.player, this.fx, this.audio)));
    this.player.model.add(this.weapons[0]!.mesh); this.weapons[0]!.mesh.position.set(0.35, 0.65, 0.1); this.weapons[0]!.mesh.rotation.y = Math.PI;
  }

  switchTo(i: number) {
    if (i < 0 || i >= this.weapons.length || i === this.idx) return;
    const c = this.weapons[this.idx]; if (c) this.player.model.remove(c.mesh);
    this.idx = i; const n = this.weapons[this.idx]!;
    this.player.model.add(n.mesh); n.mesh.position.set(0.35, 0.65, 0.1); n.mesh.rotation.y = Math.PI;
    this.onSwitch?.(n.cfg.n);
  }

  cycle() { this.switchTo((this.idx + 1) % this.weapons.length); }

  pickUp(t: WType) {
    const existing = this.weapons.find(w => w.cfg.n === WCFG[t].n);
    if (existing) { existing.ammo = Math.min(existing.ammo + WCFG[t].a, WCFG[t].a * 2); }
    this.onPickup?.(WCFG[t].n);
  }

  update(dt: number) {
    for (const d of this.drops) {
      d.timer -= dt;
      if (d.timer <= 0) {
        const w = new Weapon(WCFG[d.t], this.s, this.pw, this.player, this.fx, this.audio);
        w.mesh.position.set(d.x, 1.5, d.z); w.mesh.rotation.y = Math.random() * 6.28; this.s.add(w.mesh);
        const glow = new THREE.Mesh(new THREE.SphereGeometry(0.45, 10, 8), new THREE.MeshBasicMaterial({ color: WCFG[d.t].c, transparent: true, opacity: 0.3 }));
        glow.position.copy(w.mesh.position); this.s.add(glow);
        const ck = () => {
          const p = this.player.body.translation();
          if (Math.hypot(p.x - d.x, p.y - 1.5, p.z - d.z) < 1.5 && this.player.alive) {
            this.s.remove(w.mesh); this.s.remove(glow); this.pickUp(d.t); return;
          }
          requestAnimationFrame(ck);
        };
        ck(); d.timer = 10 + Math.random() * 10;
      }
    }
    const w = this.weapons[this.idx];
    if (!w || !this.player.alive) return;
    if (w.recoilAccum > 0) { w.recoilAccum = Math.max(0, w.recoilAccum - dt * 0.5); this.onRecoil?.(w.recoilAccum); }
    w.update(dt);
  }

  get current(): Weapon | null { return this.weapons[this.idx] ?? null; }

  fire(dir: THREE.Vector3, o: THREE.Vector3): boolean {
    const w = this.weapons[this.idx]; if (!w) return false;
    const d = dir.clone(); d.y += w.recoilAccum; d.normalize();
    return w.fire(performance.now() / 1000, d, o, this.targets);
  }
}
