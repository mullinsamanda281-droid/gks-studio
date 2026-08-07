/** Pooled particles, screen shake, floating text and synthesised audio. */

const POOL_SIZE = 260;

export class Effects {
  constructor() {
    /** @type {{x:number,y:number,vx:number,vy:number,life:number,max:number,size:number,color:string,gravity:number,active:boolean}[]} */
    this.pool = Array.from({ length: POOL_SIZE }, () => ({
      x: 0, y: 0, vx: 0, vy: 0, life: 0, max: 1, size: 2, color: '#fff', gravity: 0.2, active: false
    }));
    /** @type {{text:string,x:number,y:number,life:number,color:string}[]} */
    this.texts = [];
    this.shake = 0;
    this.slowmo = 0;
  }

  /** @returns {object|null} */
  take() {
    for (const p of this.pool) if (!p.active) { p.active = true; return p; }
    return null;
  }

  /**
   * @param {number} x
   * @param {number} y
   * @param {number} count
   * @param {string} color
   * @param {number} [power]
   * @param {number} [gravity]
   */
  burst(x, y, count, color, power = 5, gravity = 0.25) {
    for (let i = 0; i < count; i++) {
      const p = this.take();
      if (!p) return;
      const a = Math.random() * Math.PI * 2;
      const s = Math.random() * power;
      p.x = x; p.y = y;
      p.vx = Math.cos(a) * s;
      p.vy = Math.sin(a) * s - 1;
      p.max = p.life = 20 + Math.random() * 24;
      p.size = 1.5 + Math.random() * 2.5;
      p.color = color;
      p.gravity = gravity;
    }
  }

  /**
   * @param {number} x
   * @param {number} y
   * @param {number} dirX
   */
  blood(x, y, dirX) {
    for (let i = 0; i < 9; i++) {
      const p = this.take();
      if (!p) return;
      p.x = x; p.y = y;
      p.vx = dirX * (1 + Math.random() * 4);
      p.vy = (Math.random() - 0.6) * 5;
      p.max = p.life = 28 + Math.random() * 20;
      p.size = 2 + Math.random() * 2;
      p.color = '#dc2626';
      p.gravity = 0.35;
    }
  }

  /**
   * @param {number} x
   * @param {number} y
   */
  explosion(x, y) {
    this.burst(x, y, 34, '#f97316', 9, 0.12);
    this.burst(x, y, 18, '#fbbf24', 6, 0.1);
    this.burst(x, y, 14, '#6b7280', 4, 0.05);
    this.addShake(16);
  }

  /**
   * @param {number} x
   * @param {number} y
   * @param {number} dirX
   */
  muzzle(x, y, dirX) {
    for (let i = 0; i < 5; i++) {
      const p = this.take();
      if (!p) return;
      p.x = x; p.y = y;
      p.vx = dirX * (3 + Math.random() * 4);
      p.vy = (Math.random() - 0.5) * 2.4;
      p.max = p.life = 7 + Math.random() * 6;
      p.size = 2 + Math.random() * 2;
      p.color = '#fde68a';
      p.gravity = 0;
    }
  }

  /**
   * @param {string} text
   * @param {number} x
   * @param {number} y
   * @param {string} [color]
   */
  float(text, x, y, color = '#fff') {
    this.texts.push({ text, x, y, life: 60, color });
  }

  /** @param {number} amount */
  addShake(amount) {
    this.shake = Math.min(this.shake + amount, 30);
  }

  /** @param {number} frames */
  slow(frames) {
    this.slowmo = frames;
  }

  update() {
    for (const p of this.pool) {
      if (!p.active) continue;
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= 0.98;
      if (--p.life <= 0) p.active = false;
    }
    for (const t of this.texts) { t.y -= 0.9; t.life--; }
    this.texts = this.texts.filter((t) => t.life > 0);
    this.shake *= 0.86;
    if (this.shake < 0.2) this.shake = 0;
    if (this.slowmo > 0) this.slowmo--;
  }

  /** @param {CanvasRenderingContext2D} ctx */
  draw(ctx) {
    for (const p of this.pool) {
      if (!p.active) continue;
      ctx.globalAlpha = Math.max(0, p.life / p.max);
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
    }
    ctx.globalAlpha = 1;
    ctx.font = 'bold 18px system-ui';
    ctx.textAlign = 'center';
    for (const t of this.texts) {
      ctx.globalAlpha = Math.min(1, t.life / 30);
      ctx.fillStyle = t.color;
      ctx.fillText(t.text, t.x, t.y);
    }
    ctx.globalAlpha = 1;
    ctx.textAlign = 'left';
  }

  /** @returns {{x:number,y:number}} */
  shakeOffset() {
    if (this.shake <= 0) return { x: 0, y: 0 };
    return {
      x: (Math.random() - 0.5) * this.shake,
      y: (Math.random() - 0.5) * this.shake
    };
  }

  reset() {
    for (const p of this.pool) p.active = false;
    this.texts = [];
    this.shake = 0;
    this.slowmo = 0;
  }
}

/** Tiny Web Audio synth so the build ships with no audio assets. */
export class Audio {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  ensure() {
    if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (this.ctx.state === 'suspended') this.ctx.resume();
    return this.ctx;
  }

  /**
   * @param {OscillatorType} type
   * @param {number} from
   * @param {number} to
   * @param {number} dur
   * @param {number} vol
   */
  tone(type, from, to, dur, vol) {
    if (!this.enabled) return;
    const ctx = this.ensure();
    const t = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(from, t);
    osc.frequency.exponentialRampToValueAtTime(Math.max(1, to), t + dur);
    gain.gain.setValueAtTime(vol, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + dur);
    osc.connect(gain).connect(ctx.destination);
    osc.start(t);
    osc.stop(t + dur + 0.02);
  }

  /** @param {string} name */
  play(name) {
    if (!this.enabled) return;
    if (name === 'shot') this.tone('square', 640, 120, 0.07, 0.12);
    else if (name === 'shotgun') this.tone('sawtooth', 320, 60, 0.16, 0.18);
    else if (name === 'hit') this.tone('square', 260, 90, 0.06, 0.14);
    else if (name === 'explode') this.tone('sawtooth', 160, 30, 0.42, 0.24);
    else if (name === 'jump') this.tone('triangle', 300, 520, 0.09, 0.07);
    else if (name === 'pickup') this.tone('sine', 520, 900, 0.12, 0.11);
    else if (name === 'death') this.tone('sawtooth', 420, 50, 0.32, 0.16);
    else if (name === 'swing') this.tone('triangle', 200, 420, 0.08, 0.09);
    else if (name === 'win') {
      [523, 659, 784, 1047].forEach((f, i) => setTimeout(() => this.tone('square', f, f, 0.16, 0.12), i * 110));
    }
  }
}
