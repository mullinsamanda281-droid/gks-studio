/**
 * Lightweight bot controller. Produces the same input shape as the keyboard so
 * fighters do not care who is driving them.
 */
export class Bot {
  /**
   * @param {import('./fighter.js').Fighter} fighter
   * @param {number} skill 0..1
   */
  constructor(fighter, skill = 0.6) {
    this.fighter = fighter;
    this.skill = skill;
    this.think = 0;
    this.wander = Math.random() < 0.5 ? -1 : 1;
    this.jumpUrge = 0;
    this.input = { left: false, right: false, jump: false, drop: false, fire: false, aim: 0 };
  }

  /**
   * @param {import('./fighter.js').Fighter[]} others
   * @param {import('./weapons.js').DropManager} drops
   * @param {import('./physics.js').World} [world]
   * @returns {{left:boolean,right:boolean,jump:boolean,drop:boolean,fire:boolean,aim:number}}
   */
  update(others, drops, world) {
    const me = this.fighter;
    const input = this.input;
    input.left = input.right = input.jump = input.fire = false;

    if (!me.alive) return input;

    const target = this.nearestEnemy(others);
    const crate = me.weapon ? null : this.nearestCrate(drops);
    const goal = crate ?? target;
    if (!goal) return input;

    const gx = crate ? crate.x : target.chest.x;
    const gy = crate ? crate.y : target.chest.y;
    const dx = gx - me.hip.x;
    const dy = gy - me.hip.y;
    const dist = Math.abs(dx);

    // Keep mid range when armed, close the gap when hunting a crate.
    const preferred = crate ? 8 : me.weapon?.spec.melee ? 26 : 190;
    if (dist > preferred + 30) {
      if (dx > 0) input.right = true; else input.left = true;
    } else if (dist < preferred - 40 && !crate) {
      if (dx > 0) input.left = true; else input.right = true;
    } else if (--this.think <= 0) {
      this.think = 24 + Math.floor(Math.random() * 40);
      this.wander *= -1;
    }

    if (this.think > 0 && dist <= preferred + 30 && !crate) {
      if (this.wander > 0) input.right = true; else input.left = true;
    }

    // Hop when the goal is above, when blocked, or occasionally to juke.
    if (dy < -46 && me.grounded) this.jumpUrge = 6;
    if (Math.abs(me.hip.vx) < 0.35 && me.grounded && (input.left || input.right)) this.jumpUrge = 5;
    if (!crate && me.grounded && Math.random() < 0.012 * this.skill) this.jumpUrge = 5;
    // Ledge check runs before the jump commit so a bot can still hop a gap
    // deliberately, but never strolls off an edge.
    if (world) this.avoidLedge(input, world);
    if (this.jumpUrge > 0) { input.jump = true; this.jumpUrge--; }

    if (target && me.weapon) {
      const aimX = target.chest.x - me.chest.x;
      const aimY = target.chest.y - me.chest.y;
      const jitter = (1 - this.skill) * 0.5;
      input.aim = Math.atan2(aimY, aimX) + (Math.random() - 0.5) * jitter;
      const range = me.weapon.spec.melee ? 44 : 460;
      input.fire = Math.hypot(aimX, aimY) < range && Math.random() < 0.35 + this.skill * 0.5;
    }

    return input;
  }

  /**
   * Cancel movement that would step off a platform edge, unless the bot is
   * already airborne or deliberately jumping across.
   * @param {{left:boolean,right:boolean,jump:boolean}} input
   * @param {import('./physics.js').World} world
   */
  avoidLedge(input, world) {
    const me = this.fighter;
    if (!me.grounded) return;
    const dir = (input.right ? 1 : 0) - (input.left ? 1 : 0);
    if (dir === 0) return;

    // Sample a short column ahead of the leading foot, scaled by current speed
    // so a fast-moving bot brakes earlier.
    const lookahead = 30 + Math.min(Math.abs(me.hip.vx) * 6, 26);
    const probeX = me.hip.x + dir * lookahead;
    const footY = Math.max(me.footL.y, me.footR.y);
    let groundAhead = false;
    for (let dy = 8; dy <= 46; dy += 6) {
      if (world.isSolid(probeX, footY + dy)) { groundAhead = true; break; }
    }
    if (groundAhead) return;

    input.left = input.right = false;
    this.wander = -dir;
    this.think = 20;
  }

  /**
   * @param {import('./fighter.js').Fighter[]} others
   * @returns {import('./fighter.js').Fighter|null}
   */
  nearestEnemy(others) {
    let best = null;
    let bestDist = Infinity;
    for (const o of others) {
      if (o === this.fighter || !o.alive) continue;
      const d = Math.hypot(o.chest.x - this.fighter.chest.x, o.chest.y - this.fighter.chest.y);
      if (d < bestDist) { bestDist = d; best = o; }
    }
    return best;
  }

  /**
   * @param {import('./weapons.js').DropManager} drops
   * @returns {import('./weapons.js').Drop|null}
   */
  nearestCrate(drops) {
    let best = null;
    let bestDist = 420;
    for (const d of drops.drops) {
      if (d.taken) continue;
      const dist = Math.hypot(d.x - this.fighter.hip.x, d.y - this.fighter.hip.y);
      if (dist < bestDist) { bestDist = dist; best = d; }
    }
    return best;
  }
}
