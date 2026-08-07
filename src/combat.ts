import * as THREE from 'three';
import * as R from '@dimforge/rapier3d';
import { PW, CG, G, RAY } from './physics.js';
import { Char, Stickman } from './char.js';
import { Effects } from './fx.js';
export type WType = 'pistol'|'shotgun'|'smg'|'rifle'|'sword'|'rocket';
export interface WCfg { n: string; d: number; r: number; a: number; rpm: number; sp: number; kb: number; melee: boolean; ps: number; er: number; c: number }
export const WCFG: Record<WType, WCfg> = {
  pistol: { n: 'Pistol', d: 20, r: 50, a: 12, rpm: 4, sp: 0.02, kb: 6, melee: false, ps: 0, er: 0, c: 0xcccccc },
  shotgun: { n: 'Shotgun', d: 12, r: 20, a: 6, rpm: 1.2, sp: 0.12, kb: 16, melee: false, ps: 0, er: 0, c: 0xc0392b },
  smg: { n: 'SMG', d: 10, r: 35, a: 40, rpm: 12, sp: 0.06, kb: 4, melee: false, ps: 0, er: 0, c: 0x2ecc71 },
  rifle: { n: 'Rifle', d: 15, r: 45, a: 30, rpm: 7, sp: 0.035, kb: 5, melee: false, ps: 0, er: 0, c: 0x3498db },
  sword: { n: 'Sword', d: 35, r: 2.5, a: Infinity, rpm: 2.2, sp: 0, kb: 10, melee: true, ps: 0, er: 0, c: 0xf39c12 },
  rocket: { n: 'Rocket', d: 50, r: 60, a: 4, rpm: 0.8, sp: 0.005, kb: 25, melee: false, ps: 28, er: 6, c: 0xe74c3c }
};
export class Weapon {
  cfg: WCfg; ammo: number; last = 0; mesh: THREE.Group;
  constructor(cfg: WCfg, private s: THREE.Scene, private pw: PW, private owner: Char, private fx: Effects, private audio: any) {
    this.cfg = cfg; this.ammo = cfg.a; this.mesh = this.mk();
  }
  private mk(): THREE.Group {
    const g = new THREE.Group(), m = new THREE.MeshStandardMaterial({ color: this.cfg.c, roughness: 0.4, metalness: 0.3 });
    if (this.cfg.melee) {
      const b = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 1.4), m); b.position.z = -0.7; g.add(b);
      const gr = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.3, 6), m); gr.rotation.x = Math.PI / 2; g.add(gr);
    } else {
      const b = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.14, 0.6), m); g.add(b);
      const br = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.4, 8), new THREE.MeshStandardMaterial({ color: 0x333333 }));
      br.rotation.x = Math.PI / 2; br.position.z = -0.5; g.add(br);
      if (this.cfg.c === 0xe74c3c) { const t = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.8, 10), new THREE.MeshStandardMaterial({ color: 0x7f8c8d, metalness: 0.6 })); t.rotation.x = Math.PI / 2; g.add(t); }
    }
    return g;
  }
  fire(t: number, dir: THREE.Vector3, o: THREE.Vector3, targets: Char[]): boolean {
    if (t - this.last < 1 / this.cfg.rpm) return false;
    if (!this.cfg.melee && this.ammo <= 0) { this.audio.play('empty'); return false; }
    this.last = t;
    this.cfg.melee ? this.melee(dir, o, targets) : this.cfg.ps > 0 ? this.rocket(dir, o, targets) : this.hitscan(dir, o, targets);
    if (!this.cfg.melee) this.ammo--;
    this.fx.flash(o, dir); this.audio.play('shot'); return true;
  }
  private hitscan(dir: THREE.Vector3, o: THREE.Vector3, targets: Char[]) {
    const { d, r, sp, kb } = this.cfg, pellets = this.cfg.c === 0xc0392b ? 8 : 1;
    for (let i = 0; i < pellets; i++) {
      const dd = dir.clone();
      if (sp) { dd.x += (Math.random() - 0.5) * sp * 2; dd.y += (Math.random() - 0.5) * sp * 2; dd.z += (Math.random() - 0.5) * sp * 2; dd.normalize(); }
      const hit = this.pw.ray(o, dd, r, G.E | G.W | G.P | G.R);
      const end = hit ? this.pw.hp(o, dd, hit) : o.clone().add(dd.clone().multiplyScalar(r));
      this.fx.trail(o, end);
      if (hit) {
        this.fx.spark(end, dd);
        const rb = (hit as any).collider?.rigidBody;
        for (const tgt of targets) if (rb === tgt.body) tgt.hp -= d;
      }
    }
  }
  private rocket(dir: THREE.Vector3, o: THREE.Vector3, targets: Char[]) {
    const b = this.pw.body(R.RigidBodyDesc.dynamic().setTranslation(o.x, o.y, o.z).setLinvel(dir.x * 28, dir.y * 28, dir.z * 28).setCcdEnabled(true));
    this.pw.col(R.ColliderDesc.ball(0.15).setRestitution(0.2).setCollisionGroups(CG(G.R, G.W | G.E | G.P | G.R)), b);
    const m = new THREE.Mesh(new THREE.SphereGeometry(0.15, 6, 6), new THREE.MeshStandardMaterial({ color: 0xff5722, emissive: 0xff5722, emissiveIntensity: 0.5 }));
    this.s.add(m); const st = performance.now();
    const tick = () => {
      const p = b.translation(); m.position.set(p.x, p.y, p.z);
      const pl = targets.map(c => ({ c, d: Math.hypot(c.body.translation().x - p.x, c.body.translation().y - p.y, c.body.translation().z - p.z) })).find(t => t.d < 1.2);
      if (pl || (performance.now() - st) / 1000 > 3 || this.pw.ray(new THREE.Vector3(p.x, p.y, p.z), dir, 1.5, G.E | G.R)) {
        if (pl) pl.c.hp -= this.cfg.d;
        this.fx.explode(new THREE.Vector3(p.x, p.y, p.z), this.cfg.er);
        this.s.remove(m); this.pw.rm(b); return;
      }
      requestAnimationFrame(tick);
    };
    tick();
  }
  private melee(dir: THREE.Vector3, o: THREE.Vector3, targets: Char[]) {
    const hit = this.pw.ray(o, dir, this.cfg.r, G.E | G.P);
    if (hit) {
      const rb = (hit as any).collider?.rigidBody;
      for (const tgt of targets) if (rb === tgt.body) { tgt.hp -= this.cfg.d; this.fx.spark(this.pw.hp(o, dir, hit), dir); }
    }
    this.fx.slash(o, dir, this.cfg.r);
  }
  explode(pos: THREE.Vector3, radius: number, targets: Char[]) {
    this.fx.explode(pos, radius); this.audio.play('explosion');
    for (const t of targets) {
      const p = t.body.translation();
      const d = Math.hypot(p.x - pos.x, p.y - pos.y, p.z - pos.z);
      if (d < radius) { const f = 1 - d / radius; t.hp -= this.cfg.d * f; }
    }
  }
}
export class WMan {
  guns: Weapon[] = []; idx = 0; drops: { x: number; z: number; t: WType; timer: number }[] = [];
  onPickup: ((n: string) => void) | null = null;
  constructor(private s: THREE.Scene, private pw: PW, private player: Char, private fx: Effects, private audio: any, private targets: Char[]) {}
  init() {
    const spots: [number, number][] = [[-10, -10], [10, -10], [-10, 10], [10, 10], [0, 0], [-16, 0], [16, 0], [0, -16], [0, 16]];
    (['pistol', 'shotgun', 'smg', 'rifle', 'sword'] as WType[]).forEach((t, i) => this.drops.push({ x: spots[i]![0], z: spots[i]![1], t, timer: 0 }));
    const pistol = new Weapon(WCFG.pistol, this.s, this.pw, this.player, this.fx, this.audio);
    this.guns.push(pistol); this.player.model.add(pistol.mesh); pistol.mesh.position.set(0.35, 0.65, 0.1); pistol.mesh.rotation.y = Math.PI;
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
            this.s.remove(w.mesh); this.s.remove(glow); this.onPickup?.(w.cfg.n); return;
          }
          requestAnimationFrame(ck);
        };
        ck(); d.timer = 10 + Math.random() * 10;
      }
    }
    const w = this.guns[this.idx];
    if (!w || !this.player.alive) return;
  }
  get current(): Weapon | null { return this.guns[this.idx] ?? null; }
  fire(dir: THREE.Vector3, o: THREE.Vector3): boolean {
    const w = this.guns[this.idx]; if (!w) return false;
    return w.fire(performance.now() / 1000, dir, o, this.targets);
  }
}
