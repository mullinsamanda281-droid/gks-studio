import { World } from './physics.js';
import { Fighter } from './fighter.js';
import { DropManager, Bullet } from './weapons.js';
import { Effects, Audio } from './fx.js';
import { Bot } from './ai.js';
import { buildLevels, drawLevel, updateHazards, hazardBounds } from './level.js';

const COLORS = ['#38bdf8', '#f87171', '#4ade80', '#fbbf24'];
const NAMES = ['YOU', 'BOT 1', 'BOT 2', 'BOT 3'];
const ROUND_END_DELAY = 110;
const WINS_TO_TAKE_MATCH = 5;
const HAZARD_DAMAGE = 34;

export class Game {
  /** @param {HTMLCanvasElement} canvas */
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.width = canvas.width;
    this.height = canvas.height;

    this.world = new World(this.width, this.height);
    this.levels = buildLevels(this.width, this.height);
    this.levelIndex = 0;
    this.effects = new Effects();
    this.audio = new Audio();
    this.drops = new DropManager(this.width);

    /** @type {Fighter[]} */
    this.fighters = [];
    /** @type {Bot[]} */
    this.bots = [];
    /** @type {Bullet[]} */
    this.bullets = [];
    this.wins = [0, 0, 0, 0];

    this.keys = new Set();
    this.mouse = { x: this.width / 2, y: this.height / 2, down: false };
    this.prevMouseDown = false;
    this.tick = 0;
    this.roundOver = false;
    this.roundTimer = 0;
    this.winner = -1;
    this.matchOver = false;
    this.paused = false;

    this.bindInput();
    this.startRound();
  }

  bindInput() {
    addEventListener('keydown', (e) => {
      this.keys.add(e.code);
      if (e.code === 'Space') e.preventDefault();
      if (e.code === 'KeyR' && this.matchOver) this.resetMatch();
      if (e.code === 'KeyP') this.paused = !this.paused;
    });
    addEventListener('keyup', (e) => this.keys.delete(e.code));

    this.canvas.addEventListener('mousemove', (e) => {
      const r = this.canvas.getBoundingClientRect();
      this.mouse.x = (e.clientX - r.left) * (this.width / r.width);
      this.mouse.y = (e.clientY - r.top) * (this.height / r.height);
    });
    this.canvas.addEventListener('mousedown', () => { this.mouse.down = true; this.audio.ensure(); });
    addEventListener('mouseup', () => { this.mouse.down = false; });
    this.canvas.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  get level() { return this.levels[this.levelIndex]; }

  startRound() {
    this.levelIndex = Math.floor(Math.random() * this.levels.length);
    this.world.setPlatforms(this.level.platforms);
    this.drops.reset();
    this.effects.reset();
    this.bullets = [];
    this.roundOver = false;
    this.roundTimer = 0;
    this.winner = -1;

    const spawns = this.level.spawns;
    if (this.fighters.length === 0) {
      for (let i = 0; i < 4; i++) {
        const s = spawns[i % spawns.length];
        const f = new Fighter(s.x, s.y, COLORS[i], i);
        this.fighters.push(f);
        if (i > 0) this.bots.push(new Bot(f, 0.45 + i * 0.15));
      }
    } else {
      this.fighters.forEach((f, i) => {
        const s = spawns[i % spawns.length];
        f.respawn(s.x, s.y);
      });
    }
  }

  resetMatch() {
    this.wins = [0, 0, 0, 0];
    this.matchOver = false;
    this.startRound();
  }

  update() {
    if (this.paused || this.matchOver) return;
    this.tick++;

    updateHazards(this.level.hazards, this.tick);
    this.drops.update(this.world);
    this.updateFighters();
    this.updateBullets();
    this.applyHazards();
    this.effects.update();
    this.checkRoundEnd();
    this.prevMouseDown = this.mouse.down;
  }

  updateFighters() {
    for (const f of this.fighters) {
      const input = f.id === 0 ? this.playerInput() : this.botInput(f);
      f.control(input);
      this.world.step(f.points, f.sticks);

      if (input.attack) this.attack(f, input.aim);

      if (this.drops.tryPickup(f)) {
        this.audio.play('pickup');
        this.effects.float(f.weapon.spec.name, f.head.x, f.head.y - 30, f.color);
      }

      if (f.alive && this.world.isOutOfBounds(f.chest.x, f.chest.y)) {
        f.kill();
        this.audio.play('death');
        const x = Math.min(Math.max(f.chest.x, 70), this.width - 70);
        this.effects.float('OUT!', x, this.height * 0.4, f.color);
      }
    }
  }

  /** @returns {{left:boolean,right:boolean,jump:boolean,block:boolean,attack:boolean,aim:number}} */
  playerInput() {
    const me = this.fighters[0];
    const aim = Math.atan2(this.mouse.y - me.chest.y, this.mouse.x - me.chest.x);
    // Unarmed attacks fire on the click edge so punches cannot be held down.
    const armed = Boolean(me.weapon);
    const attack = armed ? this.mouse.down : (this.mouse.down && !this.prevMouseDown);
    return {
      left: this.keys.has('KeyA') || this.keys.has('ArrowLeft'),
      right: this.keys.has('KeyD') || this.keys.has('ArrowRight'),
      jump: this.keys.has('KeyW') || this.keys.has('Space') || this.keys.has('ArrowUp'),
      block: this.keys.has('ShiftLeft') || this.keys.has('ShiftRight'),
      attack,
      aim
    };
  }

  /**
   * @param {Fighter} f
   * @returns {{left:boolean,right:boolean,jump:boolean,block:boolean,attack:boolean,aim:number}}
   */
  botInput(f) {
    const bot = this.bots.find((b) => b.fighter === f);
    if (!bot) return { left: false, right: false, jump: false, block: false, attack: false, aim: 0 };
    return bot.update(this.fighters, this.drops, this.world);
  }

  /**
   * Route an attack to gunfire, a melee swing, or a bare-handed punch.
   * @param {Fighter} f
   * @param {number} aim
   */
  attack(f, aim) {
    if (!f.alive || f.stun > 0) return;
    if (!f.weapon) { this.punch(f, aim); return; }
    if (f.weapon.spec.melee) { this.swing(f, aim); return; }
    this.shoot(f, aim);
  }

  /**
   * @param {Fighter} f
   * @param {number} aim
   */
  punch(f, aim) {
    const hit = f.punch(aim);
    if (!hit) return;
    this.audio.play('swing');
    this.effects.burst(hit.x, hit.y, 4, '#e5e7eb', 2.5);

    for (const other of this.fighters) {
      if (other === f || !other.alive) continue;
      if (Math.hypot(other.chest.x - hit.x, other.chest.y - hit.y) > 34) continue;
      const kx = Math.cos(aim) * f.punchKnock;
      const ky = Math.sin(aim) * f.punchKnock - 3;
      const killed = other.damage(f.punchDamage, kx, ky);
      this.effects.burst(other.chest.x, other.chest.y, 8, '#fde68a', 4);
      this.effects.addShake(7);
      this.audio.play('hit');
      if (killed) this.onKill(other);
    }
  }

  /**
   * @param {Fighter} f
   * @param {number} aim
   */
  shoot(f, aim) {
    if (f.fireCooldown > 0) return;
    const w = f.weapon;
    if (w.ammo <= 0) { f.weapon = null; return; }
    f.fireCooldown = w.spec.rate;
    f.facing = Math.cos(aim) >= 0 ? 1 : -1;
    w.ammo--;

    const muzzleX = f.chest.x + Math.cos(aim) * 22;
    const muzzleY = f.chest.y + Math.sin(aim) * 22;
    for (let i = 0; i < w.spec.pellets; i++) {
      const a = aim + (Math.random() - 0.5) * w.spec.spread * 2;
      this.bullets.push(new Bullet(
        muzzleX, muzzleY,
        Math.cos(a) * w.spec.speed,
        Math.sin(a) * w.spec.speed,
        w.spec.damage, w.spec.knock, f.id,
        w.kind === 'rocket'
      ));
    }

    f.chest.addVelocity(-Math.cos(aim) * w.spec.knock * 0.22, -Math.sin(aim) * w.spec.knock * 0.22);
    this.effects.muzzle(muzzleX, muzzleY, Math.cos(aim));
    this.effects.addShake(w.kind === 'shotgun' ? 6 : 2.5);
    this.audio.play(w.kind === 'shotgun' ? 'shotgun' : 'shot');
    if (w.ammo <= 0) f.weapon = null;
  }

  /**
   * @param {Fighter} f
   * @param {number} aim
   */
  swing(f, aim) {
    if (f.fireCooldown > 0) return;
    f.fireCooldown = f.weapon.spec.rate;
    f.punchAnim = 9;
    f.facing = Math.cos(aim) >= 0 ? 1 : -1;

    const reach = 48;
    const hx = f.chest.x + Math.cos(aim) * reach;
    const hy = f.chest.y + Math.sin(aim) * reach;
    this.audio.play('swing');
    this.effects.burst(hx, hy, 7, '#eab308', 3.5);

    for (const other of this.fighters) {
      if (other === f || !other.alive) continue;
      if (Math.hypot(other.chest.x - hx, other.chest.y - hy) > 42) continue;
      const kx = Math.cos(aim) * f.weapon.spec.knock;
      const ky = Math.sin(aim) * f.weapon.spec.knock - 3;
      const killed = other.damage(f.weapon.spec.damage, kx, ky);
      this.effects.burst(other.chest.x, other.chest.y, 10, '#fde68a', 5);
      this.effects.addShake(10);
      this.audio.play('hit');
      if (killed) this.onKill(other);
    }
  }

  updateBullets() {
    for (const b of this.bullets) {
      b.update();
      if (this.world.isSolid(b.x, b.y)) {
        if (b.explosive) this.explode(b);
        else this.effects.burst(b.x, b.y, 5, '#cbd5e1', 3, 0.15);
        b.dead = true;
        continue;
      }
      if (this.world.isOutOfBounds(b.x, b.y)) { b.dead = true; continue; }

      for (const f of this.fighters) {
        if (!f.alive || f.id === b.owner) continue;
        if (!this.bulletHitsFighter(b, f)) continue;

        if (b.explosive) {
          this.explode(b);
        } else {
          const killed = f.damage(b.damage, b.vx * b.knock * 0.06, b.vy * b.knock * 0.06 - 1.5);
          this.effects.burst(b.x, b.y, 7, '#fca5a5', 4);
          this.effects.addShake(4);
          this.audio.play('hit');
          if (killed) this.onKill(f);
        }
        b.dead = true;
        break;
      }
    }
    this.bullets = this.bullets.filter((b) => !b.dead);
  }

  /**
   * @param {Bullet} b
   * @param {Fighter} f
   * @returns {boolean}
   */
  bulletHitsFighter(b, f) {
    for (const p of f.points) {
      if (Math.hypot(b.x - p.x, b.y - p.y) < p.radius + 4) return true;
    }
    return false;
  }

  /** @param {Bullet} b */
  explode(b) {
    const radius = 115;
    this.effects.explosion(b.x, b.y);
    this.audio.play('explode');
    for (const f of this.fighters) {
      if (!f.alive) continue;
      const d = Math.hypot(f.chest.x - b.x, f.chest.y - b.y);
      if (d > radius) continue;
      const falloff = 1 - d / radius;
      const ang = Math.atan2(f.chest.y - b.y, f.chest.x - b.x);
      const power = b.knock * falloff;
      const killed = f.damage(b.damage * falloff, Math.cos(ang) * power, Math.sin(ang) * power - 2);
      if (killed) this.onKill(f);
    }
  }

  /** Saws and lasers kill on contact and fling the body clear. */
  applyHazards() {
    for (const hz of this.level.hazards) {
      const b = hazardBounds(hz);
      if (!b.active) continue;
      for (const f of this.fighters) {
        if (!f.alive) continue;
        const inside = f.points.some(
          (p) => p.x > b.x - 6 && p.x < b.x + b.w + 6 && p.y > b.y - 6 && p.y < b.y + b.h + 6
        );
        if (!inside) continue;
        const dir = Math.sign(f.chest.x - (b.x + b.w / 2)) || 1;
        const killed = f.damage(HAZARD_DAMAGE, dir * 9, -7);
        this.effects.burst(f.chest.x, f.chest.y, 12, '#f87171', 6);
        this.effects.addShake(8);
        this.audio.play('hit');
        if (killed) this.onKill(f);
      }
    }
  }

  /** @param {Fighter} f */
  onKill(f) {
    this.audio.play('death');
    this.effects.burst(f.chest.x, f.chest.y, 26, f.color, 8);
    this.effects.burst(f.chest.x, f.chest.y, 12, '#ffffff', 5);
    this.effects.addShake(13);
  }

  checkRoundEnd() {
    const alive = this.fighters.filter((f) => f.alive);
    if (!this.roundOver && alive.length <= 1) {
      this.roundOver = true;
      this.roundTimer = ROUND_END_DELAY;
      this.winner = alive.length === 1 ? alive[0].id : -1;
      if (this.winner >= 0) {
        this.wins[this.winner]++;
        this.effects.slow(40);
        this.audio.play('win');
        if (this.wins[this.winner] >= WINS_TO_TAKE_MATCH) this.matchOver = true;
      }
    }

    if (this.roundOver && !this.matchOver && --this.roundTimer <= 0) this.startRound();
  }

  draw() {
    const ctx = this.ctx;
    const shake = this.effects.shakeOffset();

    const sky = ctx.createLinearGradient(0, 0, 0, this.height);
    sky.addColorStop(0, '#11131c');
    sky.addColorStop(1, '#1c2030');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, this.width, this.height);

    ctx.save();
    ctx.translate(shake.x, shake.y);

    drawLevel(ctx, this.level);
    this.drops.draw(ctx);
    for (const b of this.bullets) b.draw(ctx);
    for (const f of this.fighters) { f.draw(ctx); this.drawWeapon(ctx, f); }
    for (const f of this.fighters) f.drawStatus(ctx);
    this.effects.draw(ctx);

    ctx.restore();
    this.drawHud(ctx);
  }

  /**
   * @param {CanvasRenderingContext2D} ctx
   * @param {Fighter} f
   */
  drawWeapon(ctx, f) {
    if (!f.alive || !f.weapon) return;
    const aim = f.id === 0
      ? Math.atan2(this.mouse.y - f.chest.y, this.mouse.x - f.chest.x)
      : (f.facing > 0 ? 0 : Math.PI);
    ctx.save();
    ctx.translate(f.chest.x, f.chest.y);
    ctx.rotate(aim);
    ctx.fillStyle = f.weapon.spec.color;
    ctx.fillRect(8, -3, f.weapon.spec.melee ? 30 : 22, 5);
    ctx.restore();
  }

  /** @param {CanvasRenderingContext2D} ctx */
  drawHud(ctx) {
    ctx.font = 'bold 14px system-ui';
    this.fighters.forEach((f, i) => {
      const x = 18 + i * 150;
      ctx.globalAlpha = f.alive ? 1 : 0.4;
      ctx.fillStyle = f.color;
      ctx.fillRect(x, 18, 10, 10);
      ctx.fillStyle = '#e5e7eb';
      ctx.fillText(`${NAMES[i]} ${'●'.repeat(this.wins[i])}`, x + 16, 28);
      if (i === 0) {
        ctx.fillStyle = '#9ca3af';
        const label = f.weapon
          ? `${f.weapon.spec.name}${f.weapon.ammo === Infinity ? '' : ' ' + f.weapon.ammo}`
          : 'fists';
        ctx.fillText(label, x + 16, 46);
      }
      ctx.globalAlpha = 1;
    });

    ctx.textAlign = 'center';
    if (this.matchOver) {
      ctx.fillStyle = 'rgba(0,0,0,0.72)';
      ctx.fillRect(0, 0, this.width, this.height);
      ctx.fillStyle = this.fighters[this.winner]?.color ?? '#fff';
      ctx.font = 'bold 52px system-ui';
      ctx.fillText(`${NAMES[this.winner]} WINS`, this.width / 2, this.height / 2 - 8);
      ctx.fillStyle = '#e5e7eb';
      ctx.font = '19px system-ui';
      ctx.fillText('press R to play again', this.width / 2, this.height / 2 + 32);
    } else if (this.roundOver) {
      ctx.fillStyle = this.winner >= 0 ? this.fighters[this.winner].color : '#e5e7eb';
      ctx.font = 'bold 38px system-ui';
      ctx.fillText(this.winner >= 0 ? `${NAMES[this.winner]} WINS` : 'DRAW', this.width / 2, this.height / 2);
    } else if (this.paused) {
      ctx.fillStyle = '#e5e7eb';
      ctx.font = 'bold 38px system-ui';
      ctx.fillText('PAUSED', this.width / 2, this.height / 2);
    }
    ctx.textAlign = 'left';
  }

  loop = () => {
    requestAnimationFrame(this.loop);
    const steps = this.effects.slowmo > 0 ? (this.tick % 3 === 0 ? 1 : 0) : 1;
    for (let i = 0; i < steps; i++) this.update();
    if (steps === 0) this.tick++;
    this.draw();
  };

  start() { this.loop(); }
}
