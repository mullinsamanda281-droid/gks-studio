/**
 * @typedef {{x:number,y:number,w:number,h:number}} Platform
 * @typedef {{name:string, platforms:Platform[], spawns:{x:number,y:number}[]}} Level
 */

/**
 * Hand-authored arenas. Every layout leaves open sides so fighters can be
 * knocked off the map, which is the primary kill condition.
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
        { x: w * 0.18, y: ground, w: w * 0.64, h: 40 },
        { x: w * 0.1, y: ground - 150, w: 150, h: 22 },
        { x: w - w * 0.1 - 150, y: ground - 150, w: 150, h: 22 },
        { x: w * 0.5 - 90, y: ground - 260, w: 180, h: 22 }
      ],
      spawns: [
        { x: w * 0.28, y: ground - 80 },
        { x: w * 0.72, y: ground - 80 },
        { x: w * 0.16, y: ground - 220 },
        { x: w * 0.84, y: ground - 220 }
      ]
    },
    {
      name: 'Steps',
      platforms: [
        { x: w * 0.08, y: ground, w: w * 0.3, h: 40 },
        { x: w * 0.62, y: ground, w: w * 0.3, h: 40 },
        { x: w * 0.4, y: ground - 90, w: w * 0.2, h: 22 },
        { x: w * 0.2, y: ground - 200, w: 140, h: 22 },
        { x: w * 0.8 - 140, y: ground - 200, w: 140, h: 22 }
      ],
      spawns: [
        { x: w * 0.16, y: ground - 80 },
        { x: w * 0.84, y: ground - 80 },
        { x: w * 0.5, y: ground - 170 },
        { x: w * 0.3, y: ground - 280 }
      ]
    },
    {
      name: 'Pillars',
      platforms: [
        { x: w * 0.05, y: ground, w: 190, h: 40 },
        { x: w * 0.5 - 95, y: ground, w: 190, h: 40 },
        { x: w * 0.95 - 190, y: ground, w: 190, h: 40 },
        { x: w * 0.28, y: ground - 130, w: 130, h: 22 },
        { x: w * 0.72 - 130, y: ground - 130, w: 130, h: 22 },
        { x: w * 0.5 - 70, y: ground - 250, w: 140, h: 22 }
      ],
      spawns: [
        { x: w * 0.12, y: ground - 80 },
        { x: w * 0.88, y: ground - 80 },
        { x: w * 0.5, y: ground - 80 },
        { x: w * 0.5, y: ground - 330 }
      ]
    }
  ];
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
    ctx.fillRect(p.x, p.y, p.w, 5);
  }
}
