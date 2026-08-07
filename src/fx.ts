import * as THREE from 'three';
import { PW } from './physics.js';

type WeaponType = 'pistol' | 'shotgun' | 'rocket' | 'sword';
type Surface = 'metal' | 'concrete' | 'wood' | 'enemy';

interface PoolMesh {
  m: THREE.Mesh;
  v: THREE.Vector3;
  l: number;
  ml: number;
  sc: number;
  active: boolean;
}

export class Effects {
  private pool: PoolMesh[] = [];
  private active: PoolMesh[] = [];
  private trails: { m: THREE.Line; l: number; ml: number }[] = [];
  private bullets: { m: THREE.Mesh; l: number }[] = [];
  private shakeAmt = 0;
  private shakeDur = 0;
  private shakeT = 0;
  private comboT = 0;
  private comboCol = new THREE.Color();
  private comboCount = 0;
  private slowT = 0;
  private slowScale = 1;
  private lineMat = new THREE.LineBasicMaterial({ color: 0xffaa33, transparent: true, opacity: 0.8 });

  constructor(private s: THREE.Scene) {
    for (let i = 0; i < 50; i++) {
      const m = new THREE.Mesh(new THREE.SphereGeometry(0.06, 4, 4), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.8 }));
      m.visible = false;
      this.s.add(m);
      this.pool.push({ m, v: new THREE.Vector3(), l: 0, ml: 0, sc: 1, active: false });
    }
  }

  private getParticle(): PoolMesh | null {
    if (this.active.length >= 100) {
      const old = this.active.shift()!;
      old.active = false;
      old.m.visible = false;
      this.pool.push(old);
    }
    let p: PoolMesh | null = null;
    for (let i = 0; i < this.pool.length; i++) { if (!this.pool[i]!.active) { p = this.pool[i]!; break; } }
    if (!p) return null;
    p.active = true;
    p.m.visible = true;
    this.active.push(p);
    return p;
  }

  private spawn(pos: THREE.Vector3, vel: THREE.Vector3, life: number, sc: number, color: number, opacity = 0.9) {
    const p = this.getParticle();
    if (!p) return;
    p.m.position.copy(pos);
    p.v.copy(vel);
    p.l = life;
    p.ml = life;
    p.sc = sc;
    const mat = p.m.material as THREE.MeshBasicMaterial;
    mat.color.setHex(color);
    mat.opacity = opacity;
    p.m.scale.setScalar(sc);
  }

  muzzleFlash(pos: THREE.Vector3, dir: THREE.Vector3, weapon: WeaponType) {
    const colors: Record<WeaponType, number> = { pistol: 0xffee66, shotgun: 0xffcc44, rocket: 0xff8833, sword: 0x88ddff };
    switch (weapon) {
      case 'pistol':
        this.spawn(pos.clone().add(dir.clone().multiplyScalar(0.4)), new THREE.Vector3(0, 0.3, 0), 0.06, 1.5, colors.pistol);
        break;
      case 'shotgun':
        for (let i = 0; i < 5; i++) {
          const spread = dir.clone().add(new THREE.Vector3((Math.random() - 0.5) * 0.6, (Math.random() - 0.5) * 0.6, (Math.random() - 0.5) * 0.6));
          this.spawn(pos.clone().add(spread.clone().multiplyScalar(0.5)), spread.clone().multiplyScalar(2), 0.08, 1.2, colors.shotgun);
        }
        break;
      case 'rocket':
        this.spawn(pos.clone().add(dir.clone().multiplyScalar(0.6)), new THREE.Vector3(0, 0.5, 0), 0.15, 3, colors.rocket);
        for (let i = 0; i < 4; i++) this.spawn(pos.clone().add(dir.clone().multiplyScalar(0.6)), new THREE.Vector3((Math.random() - 0.5) * 3, Math.random() * 2, (Math.random() - 0.5) * 3), 0.12, 1.5, 0xff5522);
        break;
      case 'sword':
        const arc = new THREE.Mesh(new THREE.TorusGeometry(0.6, 0.02, 4, 12, Math.PI / 2), new THREE.MeshBasicMaterial({ color: colors.sword, transparent: true, opacity: 0.8 }));
        arc.position.copy(pos);
        arc.lookAt(pos.clone().add(dir));
        this.s.add(arc);
        const p = this.getParticle();
        if (p) { p.m.visible = false; this.spawn(pos.clone(), new THREE.Vector3(), 0.12, 1, colors.sword); this.s.remove(arc); }
        break;
    }
  }

  shellCasing(pos: THREE.Vector3, dir: THREE.Vector3) {
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.06, 6), new THREE.MeshBasicMaterial({ color: 0xdaa520 }));
    mesh.position.copy(pos).add(new THREE.Vector3(0.3, 0, 0));
    this.s.add(mesh);
    const vel = new THREE.Vector3(2 + Math.random() * 2, 3 + Math.random(), (Math.random() - 0.5) * 2);
    const p = this.getParticle();
    if (p) {
      p.m.geometry.dispose();
      p.m.geometry = mesh.geometry;
      (p.m.material as THREE.MeshBasicMaterial).color.setHex(0xdaa520);
      p.m.position.copy(mesh.position);
      p.v.copy(vel);
      p.l = 3;
      p.ml = 3;
      p.sc = 1;
      this.s.remove(mesh);
    }
  }

  impact(pos: THREE.Vector3, dir: THREE.Vector3, surface: Surface) {
    const bulletHole = new THREE.Mesh(new THREE.CircleGeometry(0.08, 8), new THREE.MeshBasicMaterial({ color: 0x111111, transparent: true, opacity: 0.9, side: THREE.DoubleSide }));
    bulletHole.position.copy(pos);
    bulletHole.lookAt(pos.clone().add(dir));
    this.s.add(bulletHole);
    this.bullets.push({ m: bulletHole, l: 5 });

    switch (surface) {
      case 'metal':
      case 'concrete':
        for (let i = 0; i < 6; i++) this.spawn(pos.clone(), dir.clone().multiplyScalar(2 + Math.random() * 3).add(new THREE.Vector3((Math.random() - 0.5) * 3, Math.random() * 2, (Math.random() - 0.5) * 3)), 0.15 + Math.random() * 0.15, 1, 0xffdd44);
        break;
      case 'wood':
        for (let i = 0; i < 5; i++) this.spawn(pos.clone(), new THREE.Vector3((Math.random() - 0.5) * 2, Math.random(), (Math.random() - 0.5) * 2), 0.3 + Math.random() * 0.2, 0.8, 0x8b6914);
        break;
      case 'enemy':
        for (let i = 0; i < 8; i++) this.spawn(pos.clone(), new THREE.Vector3((Math.random() - 0.5) * 4, Math.random() * 3 + 1, (Math.random() - 0.5) * 4), 0.35 + Math.random() * 0.25, 1, 0xcc2222);
        break;
    }
  }

  death(pos: THREE.Vector3) {
    for (let i = 0; i < 20; i++) this.spawn(pos.clone(), new THREE.Vector3((Math.random() - 0.5) * 10, Math.random() * 6 + 2, (Math.random() - 0.5) * 10), 0.8 + Math.random() * 0.5, 1.5, Math.random() < 0.5 ? 0x333333 : 0x555555);
    for (let i = 0; i < 10; i++) this.spawn(pos.clone(), new THREE.Vector3((Math.random() - 0.5) * 6, Math.random() * 8, (Math.random() - 0.5) * 6), 1.2 + Math.random() * 0.5, 2, 0x222222, 0.5);
    this.shake(0.8, 0.4);
  }

  explode(pos: THREE.Vector3, radius: number) {
    for (let i = 0; i < 25; i++) {
      const th = Math.random() * 6.28, ph = Math.acos(2 * Math.random() - 1);
      this.spawn(pos.clone(), new THREE.Vector3(Math.sin(ph) * Math.cos(th) * (5 + Math.random() * 5), Math.sin(ph) * Math.sin(th) * (5 + Math.random() * 5) + 2, Math.cos(ph) * (5 + Math.random() * 5)), 0.8 + Math.random() * 0.6, 1, Math.random() < 0.5 ? 0xff6633 : 0xffcc44);
    }
    this.shake(Math.min(radius * 0.15, 1.5), 0.3);
  }

  flash(pos: THREE.Vector3, dir: THREE.Vector3) { this.spawn(pos.clone().add(dir.clone().multiplyScalar(0.5)), new THREE.Vector3(0, 0.5, 0), 0.08, 2, 0xffcc44); }
  trail(a: THREE.Vector3, b: THREE.Vector3) { const l = new THREE.Line(new THREE.BufferGeometry().setFromPoints([a, b]), this.lineMat); this.s.add(l); this.trails.push({ m: l, l: 0.06, ml: 0.06 }); }
  blood(pos: THREE.Vector3) { for (let i = 0; i < 5; i++) this.spawn(pos.clone().add(new THREE.Vector3(0, 0.5, 0)), new THREE.Vector3((Math.random() - 0.5) * 4, Math.random() * 4 + 1, (Math.random() - 0.5) * 4), 0.4 + Math.random() * 0.3, 1, 0xcc2222); }
  dust(pos: THREE.Vector3) { for (let i = 0; i < 4; i++) this.spawn(pos.clone().add(new THREE.Vector3((Math.random() - 0.5) * 0.3, -0.8, (Math.random() - 0.5) * 0.3)), new THREE.Vector3((Math.random() - 0.5) * 2, 0.5, (Math.random() - 0.5) * 2), 0.3, 0.5, 0xcccccc, 0.7); }
  dash(pos: THREE.Vector3) { for (let i = 0; i < 8; i++) this.spawn(pos.clone().add(new THREE.Vector3((Math.random() - 0.5) * 0.5, (Math.random() - 0.5) * 0.5, (Math.random() - 0.5) * 0.5)), new THREE.Vector3((Math.random() - 0.5) * 2, Math.random() - 0.5, (Math.random() - 0.5) * 2), 0.4, 0.5, 0x4fc3f7, 0.7); }
  slash(o: THREE.Vector3, dir: THREE.Vector3, r: number) {
    const arc = new THREE.Mesh(new THREE.TorusGeometry(r * 0.5, 0.02, 4, 12, Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0xffdd44, transparent: true, opacity: 0.8 }));
    arc.position.copy(o); arc.lookAt(o.clone().add(dir));
    const p = this.getParticle();
    if (p) { p.m.geometry.dispose(); p.m.geometry = arc.geometry; (p.m.material as THREE.MeshBasicMaterial).color.setHex(0xffdd44); p.m.position.copy(o); p.m.quaternion.copy(arc.quaternion); p.v.set(0, 0, 0); p.l = 0.15; p.ml = 0.15; p.sc = 1; this.s.remove(arc); }
  }

  shake(intensity: number, duration: number) {
    this.shakeAmt = Math.min(this.shakeAmt + intensity, 2);
    this.shakeDur = Math.max(this.shakeDur, duration);
    this.shakeT = 0;
  }

  getShakeAmount(): number { return this.shakeAmt; }

  getShakeOffset(): THREE.Vector3 {
    if (this.shakeAmt <= 0) return new THREE.Vector3();
    const n = this.shakeT / Math.max(this.shakeDur, 0.01);
    const decay = 1 - n;
    const sx = Math.sin(this.shakeT * 47.3) * Math.cos(this.shakeT * 23.7);
    const sy = Math.sin(this.shakeT * 31.1 + 1.3) * Math.cos(this.shakeT * 19.4 + 0.7);
    return new THREE.Vector3(sx, sy, 0).multiplyScalar(this.shakeAmt * decay * 0.3);
  }

  comboFlash(count: number) {
    this.comboCount = count;
    this.comboT = 0.3;
    this.comboCol.setHSL(0.05 + count * 0.02, 1, 0.5);
  }

  getComboColor(): THREE.Color { return this.comboT > 0 ? this.comboCol : new THREE.Color(0, 0, 0); }
  getComboOpacity(): number { return this.comboT > 0 ? Math.min(this.comboT / 0.3, 1) * 0.4 : 0; }
  getComboText(): string { return this.comboCount > 1 ? `x${this.comboCount}` : ''; }

  slowMotion(scale: number, duration: number) {
    this.slowScale = scale;
    this.slowT = duration;
  }

  getSlowFactor(): number { return this.slowT > 0 ? this.slowScale : 1; }

  update(dt: number) {
    for (let i = this.active.length - 1; i >= 0; i--) {
      const p = this.active[i]!;
      p.l -= dt;
      if (p.l <= 0 || p.l > 5) {
        p.active = false;
        p.m.visible = false;
        this.active.splice(i, 1);
        this.pool.push(p);
        continue;
      }
      p.m.position.addScaledVector(p.v, dt);
      p.v.multiplyScalar(1 - dt * 2);
      p.m.scale.setScalar(p.sc * (p.l / p.ml));
      const mat = p.m.material as THREE.MeshBasicMaterial;
      if (mat.transparent) mat.opacity = Math.max(0, (p.l / p.ml) * 0.9);
    }

    for (let i = this.trails.length - 1; i >= 0; i--) {
      const t = this.trails[i]!;
      t.l -= dt;
      (t.m.material as THREE.LineBasicMaterial).opacity = Math.max(0, (t.l / t.ml) * 0.8);
      if (t.l <= 0) { this.s.remove(t.m); this.trails.splice(i, 1); }
    }

    for (let i = this.bullets.length - 1; i >= 0; i--) {
      const b = this.bullets[i]!;
      b.l -= dt;
      if (b.l <= 0) { this.s.remove(b.m); this.bullets.splice(i, 1); }
    }

    if (this.shakeAmt > 0) {
      this.shakeT += dt;
      if (this.shakeT >= this.shakeDur) { this.shakeAmt = 0; this.shakeDur = 0; this.shakeT = 0; }
      else this.shakeAmt = Math.max(0, this.shakeAmt - dt * 2);
    }

    if (this.comboT > 0) this.comboT = Math.max(0, this.comboT - dt);
    if (this.slowT > 0) this.slowT = Math.max(0, this.slowT - dt);
  }
}

export class AudioFX {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private sfxGain: GainNode | null = null;
  private musicGain: GainNode | null = null;
  private noise: AudioBuffer | null = null;
  private enabled = true;
  private musicSource: AudioBufferSourceNode | null = null;
  private musicGainTarget = 0;

  async init() {
    this.ctx = new AudioContext();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0.5;
    this.master.connect(this.ctx.destination);
    this.sfxGain = this.ctx.createGain();
    this.sfxGain.gain.value = 1;
    this.sfxGain.connect(this.master);
    this.musicGain = this.ctx.createGain();
    this.musicGain.gain.value = 0;
    this.musicGain.connect(this.master);
    const b = this.ctx.createBuffer(1, this.ctx.sampleRate * 0.5, this.ctx.sampleRate);
    const d = b.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    this.noise = b;
  }

  private osc(type: OscillatorType, f0: number, f1: number, dur: number, vol: number, t0 = 0, dest?: AudioNode) {
    const t = this.ctx!.currentTime + t0;
    const o = this.ctx!.createOscillator();
    const g = this.ctx!.createGain();
    o.type = type;
    o.frequency.setValueAtTime(f0, t);
    o.frequency.exponentialRampToValueAtTime(f1, t + dur);
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    o.connect(g).connect(dest || this.sfxGain!);
    o.start(t);
    o.stop(t + dur + 0.05);
  }

  private nz(dur: number, vol: number, freq?: number, dest?: AudioNode) {
    const t = this.ctx!.currentTime;
    const n = this.ctx!.createBufferSource();
    n.buffer = this.noise;
    let out: AudioNode = n;
    if (freq) {
      const f = this.ctx!.createBiquadFilter();
      f.type = 'lowpass';
      f.frequency.value = freq;
      n.connect(f);
      out = f;
    }
    const g = this.ctx!.createGain();
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    out.connect(g).connect(dest || this.sfxGain!);
    n.start(t);
  }

  play(name: string, vol = 1) {
    if (!this.enabled || !this.ctx || !this.sfxGain) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();
    const d = this.sfxGain;
    if (name === 'shot') { this.osc('sawtooth', 220, 60, 0.1, 0.6 * vol, 0, d); this.nz(0.1, 0.4 * vol, undefined, d); }
    else if (name === 'explosion') { this.osc('sine', 120, 30, 0.5, vol, 0, d); this.nz(0.5, 0.8 * vol, 400, d); }
    else if (name === 'hit') this.osc('square', 300, 80, 0.08, 0.4 * vol, 0, d);
    else if (name === 'jump') this.osc('triangle', 200, 400, 0.1, 0.25 * vol, 0, d);
    else if (name === 'dash') this.osc('sine', 600, 200, 0.2, 0.2 * vol, 0, d);
    else if (name === 'death') this.osc('sawtooth', 400, 50, 0.4, 0.5 * vol, 0, d);
    else if (name === 'hurt') this.osc('square', 180, 60, 0.15, 0.3 * vol, 0, d);
    else if (name === 'empty') this.osc('square', 400, 200, 0.05, 0.15 * vol, 0, d);
    else if (name === 'pickup') this.osc('sine', 400, 800, 0.15, 0.3 * vol, 0, d);
    else if (name === 'cheer') for (let i = 0; i < 8; i++) this.osc('sine', 400 + Math.random() * 800, 400 + Math.random() * 800, 0.3, 0.15 * vol, i * 0.1, d);
    else if (name === 'footstep') { this.nz(0.08, 0.15 * vol, 200, d); this.osc('triangle', 80, 40, 0.06, 0.1 * vol, 0, d); }
    else if (name === 'ricochet') { this.osc('sine', 2000, 800, 0.12, 0.15 * vol, 0, d); this.osc('sine', 3000 - Math.random() * 500, 1200, 0.08, 0.1 * vol, 0.02, d); }
    else if (name === 'reload_pistol') { this.osc('square', 300, 300, 0.03, 0.2 * vol, 0, d); this.osc('square', 300, 300, 0.03, 0.2 * vol, 0.3, d); }
    else if (name === 'reload_shotgun') { this.nz(0.15, 0.2 * vol, 300, d); this.osc('square', 200, 200, 0.05, 0.15 * vol, 0.2, d); this.osc('square', 200, 200, 0.05, 0.15 * vol, 0.5, d); }
    else if (name === 'reload_rocket') { this.osc('sawtooth', 150, 100, 0.4, 0.2 * vol, 0, d); this.nz(0.3, 0.15 * vol, 500, d); }
  }

  playAt(name: string, position: THREE.Vector3, range: number) {
    if (!this.enabled || !this.ctx || !this.sfxGain) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();
    const dist = position.distanceTo(cameraListener);
    const vol = Math.max(0, 1 - dist / range);
    if (vol <= 0) return;
    const pan = Math.max(-1, Math.min(1, position.x / (range * 0.5)));
    const merger = this.ctx.createChannelMerger(2);
    const splitter = this.ctx.createChannelSplitter(2);
    const g = this.ctx.createGain();
    g.gain.value = vol;
    g.connect(splitter).connect(merger, 0, 0).connect(merger, 0, 1).connect(this.sfxGain);
    this.play(name, vol);
  }

  playMusic(track: string) {
    if (!this.ctx || !this.musicGain) return;
    if (this.musicSource) { this.musicSource.stop(); this.musicSource = null; }
    const buf = this.generateMusic(track);
    if (!buf) return;
    const src = this.ctx.createBufferSource();
    src.buffer = buf;
    src.loop = true;
    src.connect(this.musicGain);
    this.musicGain.gain.setValueAtTime(0, this.ctx.currentTime);
    this.musicGain.gain.linearRampToValueAtTime(0.3, this.ctx.currentTime + 2);
    src.start();
    this.musicSource = src;
  }

  stopMusic() {
    if (!this.ctx || !this.musicGain || !this.musicSource) return;
    this.musicGain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 1.5);
    const src = this.musicSource;
    setTimeout(() => { src.stop(); }, 1600);
    this.musicSource = null;
  }

  private generateMusic(track: string): AudioBuffer | null {
    if (!this.ctx) return null;
    const dur = 8;
    const buf = this.ctx.createBuffer(1, this.ctx.sampleRate * dur, this.ctx.sampleRate);
    const data = buf.getChannelData(0);
    const bpm = track === 'battle' ? 140 : 100;
    const beatLen = 60 / bpm;
    for (let i = 0; i < data.length; i++) {
      const t = i / this.ctx.sampleRate;
      const beat = Math.floor(t / beatLen);
      const note = (track === 'battle' ? [220, 277, 330, 277][beat % 4] : [196, 247, 294, 247][beat % 4]) ?? 220;
      const env = Math.exp(-((t % beatLen) * 8));
      data[i] = Math.sin(t * note * Math.PI * 2) * env * 0.3 + Math.sin(t * note * 2 * Math.PI * 2) * env * 0.1;
    }
    return buf;
  }

  setMasterVolume(v: number) { if (this.master) this.master.gain.value = v; }
  setSfxVolume(v: number) { if (this.sfxGain) this.sfxGain.gain.value = v; }
  setMusicVolume(v: number) { if (this.musicGain) this.musicGain.gain.value = v; }
}

let cameraListener: THREE.Vector3 = new THREE.Vector3();
export function setCameraListener(pos: THREE.Vector3) { cameraListener = pos; }
