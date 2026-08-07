/**
 * @typedef {{name:string,damage:number,rate:number,ammo:number,speed:number,
 *   spread:number,pellets:number,knock:number,color:string,melee:boolean}} WeaponSpec
 */

/** @type {Record<string, WeaponSpec>} */
export const WEAPONS = {
  pistol:  { name: 'Pistol',  damage: 14, rate: 16, ammo: 12, speed: 15, spread: 0.02, pellets: 1, knock: 3.2, color: '#e5e7eb', melee: false },
  shotgun: { name: 'Shotgun', damage: 9,  rate: 42, ammo: 6,  speed: 14, spread: 0.20, pellets: 6, knock: 6.5, color: '#f97316', melee: false },
  smg:     { name: 'SMG',     damage: 7,  rate: 5,  ammo: 34, speed: 17, spread: 0.09, pellets: 1, knock: 1.6, color: '#22d3ee', melee: false },
  sniper:  { name: 'Sniper',  damage: 46, rate: 70, ammo: 4,  speed: 30, spread: 0.0,  pellets: 1, knock: 9.0, color: '#a78bfa', melee: false },
  rocket:  { name: 'Rocket',  damage: 38, rate: 80, ammo: 3,  speed: 9,  spread: 0.01, pellets: 1, knock: 11,  color: '#ef4444', melee: false },
  bat:     { name: 'Bat',     damage: 26, rate: 26, ammo: Infinity, speed: 0, spread: 0, pellets: 1, knock: 13, color: '#eab308', melee: true }
};

const KEYS = Object.keys(WEAPONS);
const DROP_INTERVAL = 150;
const MAX_ACTIVE_DROPS = 4;
const PICKUP_RANGE = 46;

/** A weapon crate falling from the sky, or resting on the ground. */
export class Drop {
  /**
   * @param {number} x
   * @param {number} y
   * @param {string} kind
   */
  constructor(x, y, kind) {
    this.x = x;
    this.y = y;
    this.vy = 0;
    this.kind = kind;
    this.spec = WEAPONS[kind];
    this.ammo = this.spec.ammo;
    this.landed = false;
    this.taken = false;
    this.life = 900;
  }

  /** @param {import('./physics.js').World} world */
  update(world) {
    if (this.landed) {
      // Uncollected crates expire so the arena does not silt up.
      if (--this.life <= 0) this.taken = true;
      return;
    }
    this.vy = Math.min(this.vy + 0.5, 14);
    this.y += this.vy;
    if (world.isSolid(this.x, this.y + 10)) {
      while (world.isSolid(this.x, this.y + 10)) this.y -= 1;
      this.landed = true;
      this.vy = 0;
    }
    if (this.y > world.height + 100) this.taken = true;
  }

  /** @param {CanvasRenderingContext2D} ctx */
  draw(ctx) {
    const bob = this.landed ? Math.sin(performance.now() / 260) * 3 : 0;
    ctx.save();
    ctx.translate(this.x, this.y + bob);
    ctx.fillStyle = 'rgba(0,0,0,0.35)';
    ctx.fillRect(-17, -11, 34, 22);
    ctx.fillStyle = this.spec.color;
    ctx.fillRect(-13, -3, 26, 6);
    ctx.fillRect(6, -7, 7, 5);
    ctx.restore();
  }
}

/** Live projectile. */
export class Bullet {
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} vx
   * @param {number} vy
   * @param {number} damage
   * @param {number} knock
   * @param {number} owner
   * @param {boolean} explosive
   */
  constructor(x, y, vx, vy, damage, knock, owner, explosive = false) {
    this.x = x;
    this.y = y;
    this.px = x;
    this.py = y;
    this.vx = vx;
    this.vy = vy;
    this.damage = damage;
    this.knock = knock;
    this.owner = owner;
    this.explosive = explosive;
    this.dead = false;
    this.life = 150;
  }

  update() {
    this.px = this.x;
    this.py = this.y;
    this.x += this.vx;
    this.y += this.vy;
    if (this.explosive) this.vy += 0.14;
    if (--this.life <= 0) this.dead = true;
  }

  /** @param {CanvasRenderingContext2D} ctx */
  draw(ctx) {
    ctx.strokeStyle = this.explosive ? '#ef4444' : '#fde68a';
    ctx.lineWidth = this.explosive ? 5 : 2.5;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(this.px, this.py);
    ctx.lineTo(this.x, this.y);
    ctx.stroke();
  }
}

/** Spawns crates on a timer and handles pickup proximity. */
export class DropManager {
  /** @param {number} width */
  constructor(width) {
    this.width = width;
    /** @type {Drop[]} */
    this.drops = [];
    this.timer = 90;
  }

  /** @param {import('./physics.js').World} world */
  update(world) {
    const live = this.drops.filter((d) => !d.taken).length;
    if (--this.timer <= 0 && live < MAX_ACTIVE_DROPS) {
      this.timer = DROP_INTERVAL;
      const kind = KEYS[Math.floor(Math.random() * KEYS.length)];
      const x = this.width * 0.15 + Math.random() * this.width * 0.7;
      this.drops.push(new Drop(x, -40, kind));
    } else if (this.timer <= 0) {
      this.timer = 40;
    }
    for (const d of this.drops) d.update(world);
    this.drops = this.drops.filter((d) => !d.taken);
  }

  /**
   * Hand the nearest landed crate to a fighter standing on it.
   * @param {import('./fighter.js').Fighter} fighter
   * @returns {Drop|null} the claimed crate
   */
  tryPickup(fighter) {
    if (!fighter.alive) return null;
    for (const d of this.drops) {
      if (d.taken) continue;
      const dist = Math.hypot(d.x - fighter.hip.x, d.y - fighter.hip.y);
      if (dist < PICKUP_RANGE) {
        d.taken = true;
        fighter.weapon = { kind: d.kind, spec: d.spec, ammo: d.ammo };
        return d;
      }
    }
    return null;
  }

  /** @param {CanvasRenderingContext2D} ctx */
  draw(ctx) {
    for (const d of this.drops) d.draw(ctx);
  }

  reset() {
    this.drops = [];
    this.timer = 90;
  }
}
