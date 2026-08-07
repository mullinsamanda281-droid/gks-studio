import { Point, Stick } from './physics.js';

const MOVE_ACCEL = 0.62;
const MAX_SPEED = 5.0;
const JUMP_POWER = 11.5;
const COYOTE_FRAMES = 6;
const JUMP_BUFFER_FRAMES = 7;
const MAX_HEALTH = 100;
const STUN_FRAMES = 22;
const PUNCH_COOLDOWN = 22;
const PUNCH_REACH = 40;
const PUNCH_DAMAGE = 12;
const PUNCH_KNOCK = 9;
const BLOCK_REDUCTION = 0.35;

/**
 * A stick figure built from Verlet points. The torso chain is stiff while the
 * limbs are slack, so the floppy Stick Fight motion emerges from the solver
 * rather than from any animation code.
 */
export class Fighter {
  /**
   * @param {number} x
   * @param {number} y
   * @param {string} color
   * @param {number} id
   */
  constructor(x, y, color, id) {
    this.id = id;
    this.color = color;
    this.health = MAX_HEALTH;
    this.alive = true;
    this.facing = 1;
    this.stun = 0;
    this.coyote = 0;
    this.jumpBuffer = 0;
    this.weapon = null;
    this.fireCooldown = 0;
    this.punchCooldown = 0;
    this.punchAnim = 0;
    this.hurtFlash = 0;
    this.blocking = false;
    this.gibbed = false;

    this.head = new Point(x, y - 46, 11);
    this.chest = new Point(x, y - 26, 8);
    this.hip = new Point(x, y - 4, 8);
    this.handL = new Point(x - 16, y - 18, 5);
    this.handR = new Point(x + 16, y - 18, 5);
    this.footL = new Point(x - 10, y + 20, 6);
    this.footR = new Point(x + 10, y + 20, 6);

    this.points = [this.head, this.chest, this.hip, this.handL, this.handR, this.footL, this.footR];

    // Slack limb constraints are what make the figure flop convincingly.
    this.sticks = [
      new Stick(this.head, this.chest, 1),
      new Stick(this.chest, this.hip, 1),
      new Stick(this.chest, this.handL, 0.30),
      new Stick(this.chest, this.handR, 0.30),
      new Stick(this.hip, this.footL, 0.38),
      new Stick(this.hip, this.footR, 0.38),
      new Stick(this.head, this.hip, 0.55),
      new Stick(this.handL, this.handR, 0.03),
      new Stick(this.footL, this.footR, 0.03)
    ];
    this.baseStiffness = this.sticks.map((s) => s.stiffness);
  }

  /** @returns {boolean} whether either foot is resting on a surface */
  get grounded() {
    return this.footL.onGround || this.footR.onGround;
  }

  /** @returns {boolean} true while the punch animation is extended */
  get punching() {
    return this.punchAnim > 0;
  }

  /**
   * Apply one frame of intent from a human or bot controller.
   * @param {{left:boolean,right:boolean,jump:boolean,block:boolean}} input
   */
  control(input) {
    if (!this.alive) return;

    this.coyote = this.grounded ? COYOTE_FRAMES : Math.max(0, this.coyote - 1);
    this.jumpBuffer = input.jump ? JUMP_BUFFER_FRAMES : Math.max(0, this.jumpBuffer - 1);
    if (this.fireCooldown > 0) this.fireCooldown--;
    if (this.punchCooldown > 0) this.punchCooldown--;
    if (this.punchAnim > 0) this.punchAnim--;
    if (this.hurtFlash > 0) this.hurtFlash--;
    this.blocking = Boolean(input.block) && this.grounded;

    if (this.stun > 0) {
      this.stun--;
      return;
    }

    const dir = (input.right ? 1 : 0) - (input.left ? 1 : 0);
    if (dir !== 0 && !this.blocking) {
      this.facing = dir;
      if (Math.abs(this.hip.vx) < MAX_SPEED) {
        const accel = MOVE_ACCEL * (this.grounded ? 1 : 0.55);
        this.hip.addVelocity(dir * accel, 0);
        this.chest.addVelocity(dir * accel * 0.6, 0);
      }
      this.swingLegs(dir);
    }

    if (this.jumpBuffer > 0 && this.coyote > 0 && !this.blocking) this.jump();
  }

  jump() {
    this.jumpBuffer = 0;
    this.coyote = 0;
    for (const p of [this.hip, this.chest, this.head]) p.impulse(0, JUMP_POWER * 0.55);
    this.footL.impulse(0, JUMP_POWER * 0.3);
    this.footR.impulse(0, JUMP_POWER * 0.3);
  }

  /**
   * Nudge the feet out of phase so walking reads as a stride.
   * @param {number} dir
   */
  swingLegs(dir) {
    if (!this.grounded) return;
    const phase = Math.sin(performance.now() / 90);
    this.footL.addVelocity(-dir * phase * 0.4, 0);
    this.footR.addVelocity(dir * phase * 0.4, 0);
  }

  /**
   * Throw a punch. Always available, so a disarmed fighter is never helpless.
   * @param {number} aim
   * @returns {{x:number,y:number}|null} strike point, or null if on cooldown
   */
  punch(aim) {
    if (!this.alive || this.punchCooldown > 0 || this.stun > 0 || this.blocking) return null;
    this.punchCooldown = PUNCH_COOLDOWN;
    this.punchAnim = 9;
    this.facing = Math.cos(aim) >= 0 ? 1 : -1;

    const hx = this.chest.x + Math.cos(aim) * PUNCH_REACH;
    const hy = this.chest.y + Math.sin(aim) * PUNCH_REACH;
    const fist = Math.cos(aim) >= 0 ? this.handR : this.handL;
    fist.impulse(Math.cos(aim) * 5, -Math.sin(aim) * 5);
    return { x: hx, y: hy };
  }

  /** @returns {number} damage a landed punch should deal */
  get punchDamage() { return PUNCH_DAMAGE; }
  /** @returns {number} knockback a landed punch should apply */
  get punchKnock() { return PUNCH_KNOCK; }

  /**
   * @param {number} amount
   * @param {number} knockX
   * @param {number} knockY
   * @returns {boolean} true when this hit was lethal
   */
  damage(amount, knockX = 0, knockY = 0) {
    if (!this.alive) return false;
    const scale = this.blocking ? BLOCK_REDUCTION : 1;
    this.health -= amount * scale;
    this.hurtFlash = 8;
    this.stun = Math.min(STUN_FRAMES, this.stun + Math.round(amount * scale * 0.6));
    for (const p of [this.chest, this.head, this.hip]) {
      p.addVelocity(knockX * scale, knockY * scale);
    }
    if (this.health <= 0) {
      this.kill();
      return true;
    }
    return false;
  }

  /** Go limp and fling the limbs outward. */
  kill() {
    if (!this.alive) return;
    this.alive = false;
    this.health = 0;
    this.weapon = null;
    this.blocking = false;
    for (const s of this.sticks) s.stiffness *= 0.2;
    for (const p of this.points) {
      p.addVelocity((Math.random() - 0.5) * 9, -Math.random() * 6);
    }
  }

  /**
   * @param {number} x
   * @param {number} y
   */
  respawn(x, y) {
    this.health = MAX_HEALTH;
    this.alive = true;
    this.stun = 0;
    this.hurtFlash = 0;
    this.punchAnim = 0;
    this.punchCooldown = 0;
    this.gibbed = false;
    this.weapon = null;

    const layout = [
      [this.head, 0, -46], [this.chest, 0, -26], [this.hip, 0, -4],
      [this.handL, -16, -18], [this.handR, 16, -18],
      [this.footL, -10, 20], [this.footR, 10, 20]
    ];
    for (const [point, dx, dy] of layout) point.place(x + dx, y + dy);
    this.sticks.forEach((s, i) => { s.stiffness = this.baseStiffness[i]; });
  }

  /**
   * Solid-colour stick body, thick strokes, no outlines — matching the flat
   * silhouette look of the source material.
   * @param {CanvasRenderingContext2D} ctx
   */
  draw(ctx) {
    const hurt = this.hurtFlash > 0 && this.hurtFlash % 4 < 2;
    const stroke = hurt ? '#ffffff' : this.color;

    ctx.save();
    ctx.globalAlpha = this.alive ? 1 : 0.5;
    ctx.strokeStyle = stroke;
    ctx.fillStyle = stroke;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = 8;

    ctx.beginPath();
    ctx.moveTo(this.chest.x, this.chest.y);
    ctx.lineTo(this.hip.x, this.hip.y);
    ctx.moveTo(this.chest.x, this.chest.y);
    ctx.lineTo(this.handL.x, this.handL.y);
    ctx.moveTo(this.chest.x, this.chest.y);
    ctx.lineTo(this.handR.x, this.handR.y);
    ctx.moveTo(this.hip.x, this.hip.y);
    ctx.lineTo(this.footL.x, this.footL.y);
    ctx.moveTo(this.hip.x, this.hip.y);
    ctx.lineTo(this.footR.x, this.footR.y);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(this.head.x, this.head.y, this.head.radius, 0, Math.PI * 2);
    ctx.fill();

    if (this.blocking) {
      ctx.globalAlpha = 0.5;
      ctx.strokeStyle = '#93c5fd';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(this.chest.x, this.chest.y, 26, 0, Math.PI * 2);
      ctx.stroke();
    }

    ctx.restore();
  }

  /**
   * Damage reads as a shrinking dot above the head rather than a health bar,
   * keeping the screen clean the way the original does.
   * @param {CanvasRenderingContext2D} ctx
   */
  drawStatus(ctx) {
    if (!this.alive) return;
    const frac = this.health / MAX_HEALTH;
    if (frac >= 1) return;
    ctx.save();
    ctx.globalAlpha = 0.85;
    ctx.fillStyle = frac > 0.5 ? '#4ade80' : frac > 0.25 ? '#facc15' : '#f87171';
    ctx.beginPath();
    ctx.arc(this.head.x, this.head.y - 22, 2 + frac * 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}
