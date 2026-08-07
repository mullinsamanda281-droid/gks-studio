/**
 * @typedef {{x:number,y:number,w:number,h:number}} Platform
 * @typedef {{x:number,y:number,w:number,h:number,type:'saw'|'laser',phase:number,range:number}} Hazard
 * @typedef {{name:string, platforms:Platform[], spawns:{x:number,y:number}[], hazards:Hazard[]}} Level
 */

/**
 * Compact arenas with open sides — ring-outs are the primary kill, so no layout
 * fully encloses the play area.
 * @param {number} w
 * @param {number} h
 * @returns {Level[]}
 */
export function buildLevels(w, h) {
  const ground = h - 90;
  return [
    {
      name: 'Towers',
      platforms: [
        { x: w * 0.20, y: ground, w: w * 0.60, h: 40 },
        { x: w * 0.10, y: ground - 150, w: 150, h: 20 },
        { x: w - w * 0.10 - 150, y: ground - 150, w: 150, h: 20 },
        { x: w * 0.5 - 90, y: ground - 265, w: 180, h: 20 }
      ],
      spawns: [
        { x: w * 0.30, y: ground - 80 },
        { x: w * 0.70, y: ground - 80 },
        { x: w * 0.16, y: ground - 220 },
        { x: w * 0.84, y: ground - 220 }
      ],
      hazards: [
        { x: w * 0.5 - 90, y: ground - 300, w: 180, h: 14, type: 'laser', phase: 0, range: 0 }
      ]
    },
    {
      name: 'Steps',
      platforms: [
        { x: w * 0.08, y: ground, w: w * 0.30, h: 40 },
        { x: w * 0.62, y: ground, w: w * 0.30, h: 40 },
        { x: w * 0.40, y: ground - 95, w: w * 0.20, h: 20 },
        { x: w * 0.20, y: ground - 205, w: 140, h: 20 },
        { x: w * 0.80 - 140, y: ground - 205, w: 140, h: 20 }
      ],
      spawns: [
        { x: w * 0.16, y: ground - 80 },
        { x: w * 0.84, y: ground - 80 },
        { x: w * 0.50, y: ground - 175 },
        { x: w * 0.28, y: ground - 285 }
      ],
      hazards: [
        { x: w * 0.44, y: ground - 40, w: 26, h: 26, type: 'saw', phase: 0, range: 150 }
      ]
    },
    {
      name: 'Pillars',
      platforms: [
        { x: w * 0.05, y: ground, w: 190, h: 40 },
        { x: w * 0.5 - 95, y: ground, w: 190, h: 40 },
        { x: w * 0.95 - 190, y: ground, w: 190, h: 40 },
        { x: w * 0.28, y: ground - 135, w: 130, h: 20 },
        { x: w * 0.72 - 130, y: ground - 135, w: 130, h: 20 },
        { x: w * 0.5 - 70, y: ground - 255, w: 140, h: 20 }
      ],
      spawns: [
        { x: w * 0.12, y: ground - 80 },
        { x: w * 0.88, y: ground - 80 },
        { x: w * 0.50, y: ground - 80 },
        { x: w * 0.50, y: ground - 330 }
      ],
      hazards: []
    }
  ];
}

/**
 * Advance hazard animation and report anything a fighter is touching.
 * @param {Hazard[]} hazards
 * @param {number} tick
 */
export function updateHazards(hazards, tick) {
  for (const hz of hazards) {
    if (hz.type === 'saw') hz.phase = Math.sin(tick / 60);
    else hz.phase = (tick % 260) / 260;
  }
}

/**
 * @param {Hazard} hz
 * @returns {{x:number,y:number,w:number,h:number,active:boolean}} current bounds
 */
export function hazardBounds(hz) {
  if (hz.type === 'saw') {
    return { x: hz.x + hz.phase * hz.range, y: hz.y, w: hz.w, h: hz.h, active: true };
  }
  // Lasers pulse: only lethal during the second half of their cycle.
  return { x: hz.x, y: hz.y, w: hz.w, h: hz.h, active: hz.phase > 0.55 };
}

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {Level} level
 */
export function drawLevel(ctx, level) {
  for (const p of level.platforms) {
    ctx.fillStyle = '#2b2f3a';
    ctx.fillRect(p.x, p.y, p.w, p.h);
    ctx.fillStyle = '#3d4354';
    ctx.fillRect(p.x, p.y, p.w, 4);
  }

  for (const hz of level.hazards) {
    const b = hazardBounds(hz);
    if (hz.type === 'saw') {
      ctx.save();
      ctx.translate(b.x + b.w / 2, b.y + b.h / 2);
      ctx.rotate(performance.now() / 90);
      ctx.fillStyle = '#94a3b8';
      for (let i = 0; i < 6; i++) {
        ctx.rotate(Math.PI / 3);
        ctx.fillRect(-3, -b.w, 6, b.w);
      }
      ctx.fillStyle = '#cbd5e1';
      ctx.beginPath();
      ctx.arc(0, 0, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    } else {
      ctx.fillStyle = b.active ? 'rgba(248,113,113,0.85)' : 'rgba(248,113,113,0.18)';
      ctx.fillRect(b.x, b.y, b.w, b.h);
    }
  }
}
