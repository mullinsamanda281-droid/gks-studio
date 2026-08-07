import { Point, Stick } from './physics.js';

const MOVE_ACCEL = 0.55;
const MAX_SPEED = 4.6;
const JUMP_POWER = 11.5;
const COYOTE_FRAMES = 6;
const JUMP_BUFFER_FRAMES = 7;
const MAX_HEALTH = 100;
const STUN_FRAMES = 26;

/**
 * A stick figure built from Verlet points. The torso drives movement; limbs
 * dangle from constraints, which is what produces the floppy Stick Fight look.
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
    this.dead = false;
    this.stun = 0;
    this.coyote = 0;
    this.jumpBuffer = 0;
    this.weapon = null;
    this.fireCooldown = 0;
    this.deathTimer = 0;

    this.head = new Point(x, y - 46, 11);
    this.chest = new Point(x, y - 26, 8);
    this.hip = new Point(x, y - 4, 8);
    this.handL = new Point(x - 16, y - 18, 5);
    this.handR = new Point(x + 16, y - 18, 5);
    this.footL = new Point(x - 10, y + 20, 6);
    this.footR = new Point(x + 10, y + 20, 6);

    this.points = [this.head, this.chest, this.hip, this.handL, this.handR, this.footL, this.footR];

    this.sticks = [
      new Stick(this.head, this.chest, 1),
      new Stick(this.chest, this.hip, 1),
      new Stick(this.chest, this.handL, 0.42),
      new Stick(this.chest, this.handR, 0.42),
      new Stick(this.hip, this.footL, 0.5),
      new Stick(this.hip, this.footR, 0.5),
      new Stick(this.head, this.hip, 0.6),
      new Stick(this.handL, this.handR, 0.05),
      new Stick(this.footL, this.footR, 0.05)
    ];
  }

  /** @returns {boolean} whether any foot is resting on a surface */
  get grounded() {
    return this.footL.onGround || this.footR.onGround;
  }

  /** @returns {{x:number,y:number}} torso centre, used for aiming and hits */
  get center() {
    return { x: this.chest.x, y: this.chest.y };
  }

  /**
   * Apply per-frame intent produced by a human or an AI controller.
   * @param {{left:boolean,right:boolean,jump:boolean,drop:boolean}} input
   */
  control(input) {
    if (!this.alive) return;

    this.coyote = this.grounded ? COYOTE_FRAMES : Math.max(0, this.coyote - 1);
    this.jumpBuffer = input.jump ? JUMP_BUFFER_FRAMES : Math.max(0, this.jumpBuffer - 1);
    if (this.fireCooldown > 0) this.fireCooldown--;

    if (this.stun > 0) {
      this.stun--;
      return;
    }

    const dir = (input.right ? 1 : 0) - (input.left ? 1 : 0);
    if (dir !== 0) {
      this.facing = dir;
      const speed = this.hip.vx;
      if (Math.abs(speed) < MAX_SPEED) {
        const accel = MOVE_ACCEL * (this.grounded ? 1 : 0.55);
        this.hip.addVelocity(dir * accel, 0);
        this.chest.addVelocity(dir * accel * 0.6, 0);
      }
      this.swingLegs(dir);
    }

    if (this.jumpBuffer > 0 && this.coyote > 0) {
      this.jump();
    }
  }

  jump() {
    this.jumpBuffer = 0;
    this.coyote = 0;
    for (const p of [this.hip, this.chest, this.head]) p.impulse(0, JUMP_POWER * 0.55);
    this.footL.impulse(0, JUMP_POWER * 0.3);
    this.footR.impulse(0, JUMP_POWER * 0.3);
  }

  /**
   * Nudge the feet in opposite phase so walking reads as a stride.
   * @param {number} dir
   */
  swingLegs(dir) {
    if (!this.grounded) return;
    const phase = Math.sin(performance.now() / 90);
    this.footL.addVelocity(-dir * phase * 0.35, 0);
    this.footR.addVelocity(dir * phase * 0.35, 0);
  }

  /**
   * @param {number} amount
   * @param {number} knockX
   * @param {number} knockY
   * @returns {boolean} true when this hit was lethal
   */
  damage(amount, knockX = 0, knockY = 0) {
    if (!this.alive) return false;
    this.health -= amount;
    this.stun = Math.min(STUN_FRAMES, this.stun + Math.round(amount * 0.6));
    for (const p of [this.chest, this.head, this.hip]) p.addVelocity(knockX, knockY);
    if (this.health <= 0) {
      this.kill();
      return true;
    }
    return false;
  }

  kill() {
    if (!this.alive) return;
    this.alive = false;
    this.dead = true;
    this.health = 0;
    this.weapon = null;
    for (const s of this.sticks) s.stiffness *= 0.35;
    for (const p of this.points) {
      p.addVelocity((Math.random() - 0.5) * 6, Math.random() * 4);
    }
  }

  /**
   * @param {number} x
   * @param {number} y
   */
  respawn(x, y) {
    this.health = MAX_HEALTH;
    this.alive = true;
    this.dead = false;
    this.stun = 0;
    this.deathTimer = 0;
    const layout = [
      [this.head, 0, -46], [this.chest, 0, -26], [this.hip, 0, -4],
      [this.handL, -16, -18], [this.handR, 16, -18],
      [this.footL, -10, 20], [this.footR, 10, 20]
    ];
    for (const [point, dx, dy] of layout) point.place(x + dx, y + dy);
    const base = [1, 1, 0.42, 0.42, 0.5, 0.5, 0.6, 0.05, 0.05];
    this.sticks.forEach((s, i) => { s.stiffness = base[i]; });
  }

  /**
   * @param {CanvasRenderingContext2D} ctx
   */
  draw(ctx) {
    const alpha = this.alive ? 1 : 0.55;
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.strokeStyle = this.color;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = 7;

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
    ctx.fillStyle = this.color;
    ctx.arc(this.head.x, this.head.y, this.head.radius, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  /**
   * Health pip above the head.
   * @param {CanvasRenderingContext2D} ctx
   */
  drawHealth(ctx) {
    if (!this.alive) return;
    const w = 34;
    const x = this.head.x - w / 2;
    const y = this.head.y - 24;
    ctx.fillStyle = 'rgba(0,0,0,0.45)';
    ctx.fillRect(x, y, w, 5);
    ctx.fillStyle = this.health > 50 ? '#4ade80' : this.health > 25 ? '#facc15' : '#f87171';
    ctx.fillRect(x, y, w * (this.health / MAX_HEALTH), 5);
  }
}
