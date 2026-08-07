import * as THREE from 'three';
import { PW } from './physics.js';
const MAT = { smoke: new THREE.MeshBasicMaterial({ color: 0xcccccc, transparent: true, opacity: 0.7 }), spark: new THREE.MeshBasicMaterial({ color: 0xffdd44 }), blood: new THREE.MeshBasicMaterial({ color: 0xcc2222 }) };
export class Effects {
  private parts: { m: THREE.Mesh; v: THREE.Vector3; l: number; ml: number; sc: number }[] = [];
  private trails: { m: THREE.Line; l: number; ml: number }[] = [];
  private line = new THREE.LineBasicMaterial({ color: 0xffaa33, transparent: true, opacity: 0.8 });
  shake = 0;
  constructor(private s: THREE.Scene) {}
  private p(m: THREE.Mesh, v: THREE.Vector3, l: number, sc: number) { this.parts.push({ m, v, l, ml: l, sc }); this.s.add(m); }
  flash(pos: THREE.Vector3, dir: THREE.Vector3) { const f = new THREE.Mesh(new THREE.SphereGeometry(0.12, 5, 5), new THREE.MeshBasicMaterial({ color: 0xffcc44, transparent: true, opacity: 0.9 })); f.position.copy(pos).add(dir.clone().multiplyScalar(0.5)); this.p(f, new THREE.Vector3(0, 0.5, 0), 0.08, 2); }
  trail(a: THREE.Vector3, b: THREE.Vector3) { const l = new THREE.Line(new THREE.BufferGeometry().setFromPoints([a, b]), this.line); this.s.add(l); this.trails.push({ m: l, l: 0.06, ml: 0.06 }); }
  spark(pos: THREE.Vector3, dir: THREE.Vector3) { for (let i = 0; i < 6; i++) { const p = new THREE.Mesh(new THREE.SphereGeometry(0.04, 4, 4), MAT.spark); p.position.copy(pos); this.p(p, dir.clone().multiplyScalar(3 + Math.random() * 4).add(new THREE.Vector3((Math.random() - 0.5) * 3, Math.random() * 3, (Math.random() - 0.5) * 3)), 0.2 + Math.random() * 0.2, 1); } }
  blood(pos: any) { for (let i = 0; i < 5; i++) { const p = new THREE.Mesh(new THREE.SphereGeometry(0.05, 4, 4), MAT.blood); p.position.set(pos.x, pos.y + 0.5, pos.z); this.p(p, new THREE.Vector3((Math.random() - 0.5) * 4, Math.random() * 4 + 1, (Math.random() - 0.5) * 4), 0.4 + Math.random() * 0.3, 1); } }
  death(pos: any) { for (let i = 0; i < 15; i++) { const p = new THREE.Mesh(new THREE.SphereGeometry(0.06, 4, 4), MAT.spark); p.position.set(pos.x, pos.y, pos.z); this.p(p, new THREE.Vector3((Math.random() - 0.5) * 8, Math.random() * 6 + 2, (Math.random() - 0.5) * 8), 0.6 + Math.random() * 0.4, 1.5); } }
  dust(pos: any) { for (let i = 0; i < 4; i++) { const p = new THREE.Mesh(new THREE.SphereGeometry(0.05, 4, 4), MAT.smoke); p.position.set(pos.x + (Math.random() - 0.5) * 0.3, pos.y - 0.8, pos.z + (Math.random() - 0.5) * 0.3); this.p(p, new THREE.Vector3((Math.random() - 0.5) * 2, 0.5, (Math.random() - 0.5) * 2), 0.3, 0.5); } }
  dash(pos: any) { for (let i = 0; i < 8; i++) { const p = new THREE.Mesh(new THREE.SphereGeometry(0.08, 4, 4), new THREE.MeshBasicMaterial({ color: 0x4fc3f7, transparent: true, opacity: 0.7 })); p.position.set(pos.x + (Math.random() - 0.5) * 0.5, pos.y + (Math.random() - 0.5) * 0.5, pos.z + (Math.random() - 0.5) * 0.5); this.p(p, new THREE.Vector3((Math.random() - 0.5) * 2, Math.random() - 0.5, (Math.random() - 0.5) * 2), 0.4, 0.5); } }
  slash(o: THREE.Vector3, dir: THREE.Vector3, r: number) { const a = new THREE.Mesh(new THREE.TorusGeometry(r * 0.5, 0.02, 4, 12, Math.PI / 2), new THREE.MeshBasicMaterial({ color: 0xffdd44, transparent: true, opacity: 0.8 })); a.position.copy(o); a.lookAt(o.clone().add(dir)); this.p(a, new THREE.Vector3(), 0.15, 1); }
  explode(pos: THREE.Vector3, radius: number) {
    for (let i = 0; i < 25; i++) { const p = new THREE.Mesh(new THREE.SphereGeometry(0.08 + Math.random() * 0.06, 5, 5), new THREE.MeshBasicMaterial({ color: Math.random() < 0.5 ? 0xff6633 : 0xffcc44, transparent: true, opacity: 0.9 })); p.position.copy(pos); const th = Math.random() * 6.28, ph = Math.acos(2 * Math.random() - 1); this.p(p, new THREE.Vector3(Math.sin(ph) * Math.cos(th) * (5 + Math.random() * 5), Math.sin(ph) * Math.sin(th) * (5 + Math.random() * 5) + 2, Math.cos(ph) * (5 + Math.random() * 5)), 0.8 + Math.random() * 0.6, 1); }
    const sw = new THREE.Mesh(new THREE.SphereGeometry(radius * 0.4, 12, 10), new THREE.MeshBasicMaterial({ color: 0xff6633, transparent: true, opacity: 0.5 })); sw.position.copy(pos); this.p(sw, new THREE.Vector3(), 0.3, 6);
    this.addShake(Math.min(radius * 0.15, 1.5));
  }
  addShake(a: number) { this.shake = Math.min(this.shake + a, 2); }
  update(dt: number) {
    for (let i = this.parts.length - 1; i >= 0; i--) { const p = this.parts[i]!; p.l -= dt; p.m.position.add(p.v.clone().multiplyScalar(dt)); p.v.multiplyScalar(1 - dt * 2); p.m.scale.setScalar(p.sc * (p.l / p.ml)); const m = p.m.material as THREE.MeshBasicMaterial; if (m.transparent) m.opacity = Math.max(0, (p.l / p.ml) * 0.9); if (p.l <= 0) { this.s.remove(p.m); this.parts.splice(i, 1); } }
    for (let i = this.trails.length - 1; i >= 0; i--) { const t = this.trails[i]!; t.l -= dt; (t.m.material as THREE.LineBasicMaterial).opacity = Math.max(0, (t.l / t.ml) * 0.8); if (t.l <= 0) { this.s.remove(t.m); this.trails.splice(i, 1); } }
    this.shake = Math.max(0, this.shake - dt * 3);
  }
}
export class AudioFX {
  private ctx: AudioContext | null = null; private master: GainNode | null = null;
  private noise: AudioBuffer | null = null; private enabled = true;
  async init() { this.ctx = new AudioContext(); this.master = this.ctx.createGain(); this.master.gain.value = 0.5; this.master.connect(this.ctx.destination); const b = this.ctx.createBuffer(1, this.ctx.sampleRate * 0.5, this.ctx.sampleRate); const d = b.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; this.noise = b; }
  private osc(type: OscillatorType, f0: number, f1: number, dur: number, vol: number, t0 = 0) { const t = this.ctx!.currentTime + t0; const o = this.ctx!.createOscillator(), g = this.ctx!.createGain(); o.type = type; o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(f1, t + dur); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur); o.connect(g).connect(this.master!); o.start(t); o.stop(t + dur + 0.05); }
  private nz(dur: number, vol: number, freq?: number) { const t = this.ctx!.currentTime; const n = this.ctx!.createBufferSource(); n.buffer = this.noise; let out: AudioNode = n; if (freq) { const f = this.ctx!.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = freq; n.connect(f); out = f; } const g = this.ctx!.createGain(); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur); out.connect(g).connect(this.master!); n.start(t); }
  play(name: string, vol = 1) { if (!this.enabled || !this.ctx || !this.master) return; if (this.ctx.state === 'suspended') this.ctx.resume(); const p = this.master.gain.value; this.master.gain.value = p * vol; if (name === 'shot') { this.osc('sawtooth', 220, 60, 0.1, 0.6); this.nz(0.1, 0.4); } else if (name === 'explosion') { this.osc('sine', 120, 30, 0.5, 1); this.nz(0.5, 0.8, 400); } else if (name === 'hit') this.osc('square', 300, 80, 0.08, 0.4); else if (name === 'jump') this.osc('triangle', 200, 400, 0.1, 0.25); else if (name === 'dash') this.osc('sine', 600, 200, 0.2, 0.2); else if (name === 'death') this.osc('sawtooth', 400, 50, 0.4, 0.5); else if (name === 'hurt') this.osc('square', 180, 60, 0.15, 0.3); else if (name === 'empty') this.osc('square', 400, 200, 0.05, 0.15); else if (name === 'pickup') this.osc('sine', 400, 800, 0.15, 0.3); else if (name === 'cheer') for (let i = 0; i < 8; i++) this.osc('sine', 400 + Math.random() * 800, 400 + Math.random() * 800, 0.3, 0.15, i * 0.1); this.master.gain.value = p; }
}
