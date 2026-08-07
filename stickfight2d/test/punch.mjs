import { Fighter } from '../src/fighter.js';
global.performance = global.performance ?? { now: () => Date.now() };

const a = new Fighter(300, 400, '#fff', 0);
const b = new Fighter(330, 400, '#fff', 1);

// Punch must be available with no weapon.
const hit = a.punch(0);
console.log('unarmed punch lands  :', hit ? 'yes' : 'NO');
console.log('cooldown enforced    :', a.punch(0) === null ? 'yes' : 'NO');

// Damage + knockback
const beforeX = b.chest.x;
b.damage(a.punchDamage, a.punchKnock, -3);
console.log('damage applied       :', b.health < 100 ? `yes (${b.health})` : 'NO');
b.chest.x += b.chest.vx;
console.log('knocked backward     :', b.chest.x > beforeX ? 'yes' : 'NO');

// Blocking halves incoming damage
const c = new Fighter(500, 400, '#fff', 2);
c.blocking = true;
c.damage(40, 0, 0);
const blocked = 100 - c.health;
const d = new Fighter(600, 400, '#fff', 3);
d.damage(40, 0, 0);
const unblocked = 100 - d.health;
console.log('block reduces damage :', blocked < unblocked ? `yes (${blocked} vs ${unblocked})` : 'NO');

// Punches must be lethal eventually
const victim = new Fighter(700, 400, '#fff', 3);
let swings = 0;
while (victim.alive && swings < 40) { victim.damage(12, 0, 0); swings++; }
console.log('fists can kill       :', !victim.alive ? `yes (${swings} hits)` : 'NO');

// Death should slacken the rig
const e = new Fighter(800, 400, '#fff', 0);
const stiffBefore = e.sticks[0].stiffness;
e.kill();
console.log('ragdoll goes limp    :', e.sticks[0].stiffness < stiffBefore ? 'yes' : 'NO');
e.respawn(800, 400);
console.log('respawn restores rig :', e.sticks[0].stiffness === stiffBefore && e.health === 100 ? 'yes' : 'NO');
