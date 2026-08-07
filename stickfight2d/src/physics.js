/** Verlet particle. Position history encodes velocity. */
export class Point {
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} [radius]
   */
  constructor(x, y, radius = 4) {
    this.x = x;
    this.y = y;
    this.px = x;
    this.py = y;
    this.radius = radius;
    this.pinned = false;
    this.onGround = false;
  }

  /** @returns {number} horizontal velocity */
  get vx() { return this.x - this.px; }
  /** @returns {number} vertical velocity */
  get vy() { return this.y - this.py; }

  /**
   * @param {number} vx
   * @param {number} vy
   */
  setVelocity(vx, vy) {
    this.px = this.x - vx;
    this.py = this.y - vy;
  }

  /**
   * Add to this point's implicit velocity. Positive y pushes downward, matching
   * screen-space axes.
   * @param {number} x
   * @param {number} y
   */
  addVelocity(x, y) {
    this.px -= x;
    this.py -= y;
  }

  /**
   * Apply an impulse in intuitive screen space: positive y moves the point up.
   * @param {number} x
   * @param {number} y
   */
  impulse(x, y) {
    this.px -= x;
    this.py += y;
  }

  /**
   * Teleport without inheriting velocity.
   * @param {number} x
   * @param {number} y
   */
  place(x, y) {
    this.x = this.px = x;
    this.y = this.py = y;
  }
}

/** Distance constraint between two points. */
export class Stick {
  /**
   * @param {Point} a
   * @param {Point} b
   * @param {number} [stiffness] 0..1
   * @param {number} [length] defaults to current distance
   */
  constructor(a, b, stiffness = 1, length) {
    this.a = a;
    this.b = b;
    this.stiffness = stiffness;
    this.length = length ?? Math.hypot(b.x - a.x, b.y - a.y);
  }

  solve() {
    const dx = this.b.x - this.a.x;
    const dy = this.b.y - this.a.y;
    const dist = Math.hypot(dx, dy) || 0.0001;
    const diff = ((this.length - dist) / dist) * 0.5 * this.stiffness;
    const ox = dx * diff;
    const oy = dy * diff;
    if (!this.a.pinned) { this.a.x -= ox; this.a.y -= oy; }
    if (!this.b.pinned) { this.b.x += ox; this.b.y += oy; }
  }
}

const GRAVITY = 0.62;
const AIR_DRAG = 0.995;
const GROUND_FRICTION = 0.82;
const SOLVER_PASSES = 6;

/** Verlet world: integration, constraint solving and platform collision. */
export class World {
  /**
   * @param {number} width
   * @param {number} height
   */
  constructor(width, height) {
    this.width = width;
    this.height = height;
    /** @type {{x:number,y:number,w:number,h:number}[]} */
    this.platforms = [];
  }

  /** @param {{x:number,y:number,w:number,h:number}[]} platforms */
  setPlatforms(platforms) {
    this.platforms = platforms;
  }

  /**
   * Advance one fixed step.
   * @param {Point[]} points
   * @param {Stick[]} sticks
   */
  step(points, sticks) {
    this.integrate(points);
    for (let i = 0; i < SOLVER_PASSES; i++) {
      for (const stick of sticks) stick.solve();
      this.collide(points);
    }
  }

  /** @param {Point[]} points */
  integrate(points) {
    for (const p of points) {
      if (p.pinned) continue;
      const vx = (p.x - p.px) * AIR_DRAG;
      const vy = (p.y - p.py) * AIR_DRAG;
      p.px = p.x;
      p.py = p.y;
      p.x += vx;
      p.y += vy + GRAVITY;
      p.onGround = false;
    }
  }

  /** @param {Point[]} points */
  collide(points) {
    for (const p of points) {
      if (p.pinned) continue;
      for (const plat of this.platforms) this.resolvePlatform(p, plat);
    }
  }

  /**
   * Push a point out of a platform along the shallowest axis.
   * @param {Point} p
   * @param {{x:number,y:number,w:number,h:number}} plat
   */
  resolvePlatform(p, plat) {
    const r = p.radius;
    const left = plat.x - r;
    const right = plat.x + plat.w + r;
    const top = plat.y - r;
    const bottom = plat.y + plat.h + r;
    if (p.x < left || p.x > right || p.y < top || p.y > bottom) return;

    const overlapLeft = p.x - left;
    const overlapRight = right - p.x;
    const overlapTop = p.y - top;
    const overlapBottom = bottom - p.y;
    const min = Math.min(overlapLeft, overlapRight, overlapTop, overlapBottom);

    if (min === overlapTop) {
      p.y = top;
      const vx = p.vx;
      p.py = p.y;
      p.px = p.x - vx * GROUND_FRICTION;
      p.onGround = true;
    } else if (min === overlapBottom) {
      p.y = bottom;
      p.py = p.y;
    } else if (min === overlapLeft) {
      p.x = left;
      p.px = p.x;
    } else {
      p.x = right;
      p.px = p.x;
    }
  }

  /**
   * @param {number} x
   * @param {number} y
   * @returns {boolean} true when the position is inside solid geometry
   */
  isSolid(x, y) {
    return this.platforms.some(
      (pl) => x >= pl.x && x <= pl.x + pl.w && y >= pl.y && y <= pl.y + pl.h
    );
  }

  /**
   * @param {number} x
   * @param {number} y
   * @returns {boolean} true when the position fell out of the arena
   */
  isOutOfBounds(x, y) {
    return y > this.height + 200 || x < -300 || x > this.width + 300;
  }
}
