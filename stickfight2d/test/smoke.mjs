import { World } from '../src/physics.js';
import { Fighter } from '../src/fighter.js';
import { DropManager } from '../src/weapons.js';
import { Bot } from '../src/ai.js';
import { buildLevels } from '../src/level.js';
global.performance = global.performance ?? { now: () => Date.now() };

const W=1280,H=720;
const lv = buildLevels(W,H)[0];
const world = new World(W,H); world.setPlatforms(lv.platforms);
const drops = new DropManager(W);
const fighters = lv.spawns.slice(0,4).map((s,i)=>new Fighter(s.x,s.y,'#fff',i));
const bots = fighters.map(f=>new Bot(f,0.7));   // all bots, no dummy input

let picked=0, fires=0, fell=0;
for(let frame=0; frame<2400; frame++){
  drops.update(world);
  for(const f of fighters){
    const bot = bots.find(b=>b.fighter===f);
    const input = bot.update(fighters, drops, world);
    if(input.fire) fires++;
    f.control(input);
    world.step(f.points, f.sticks);
    if(drops.tryPickup(f)) picked++;
    if(f.alive && world.isOutOfBounds(f.chest.x,f.chest.y)){ f.kill(); fell++; }
  }
}
console.log('frames            : 2400');
console.log('crates picked up  :', picked);
console.log('shots attempted   :', fires);
console.log('fell off map      :', fell);
console.log('armed at end      :', fighters.filter(f=>f.weapon).length + '/4');
console.log('finite coords     :', fighters.every(f=>Number.isFinite(f.chest.x)));
