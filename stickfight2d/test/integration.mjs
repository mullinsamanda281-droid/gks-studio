// Headless harness: stub just enough DOM for Game to construct and tick.
const noop = () => {};
const ctxStub = new Proxy({}, { get: (_,p) => {
  if (p === 'createLinearGradient') return () => ({ addColorStop: noop });
  if (p === 'canvas') return { width: 1280, height: 720 };
  return noop;
}});
global.performance = global.performance ?? { now: () => Date.now() };
global.window = { AudioContext: null };
global.requestAnimationFrame = noop;
global.addEventListener = noop;
const canvas = {
  width: 1280, height: 720,
  getContext: () => ctxStub,
  addEventListener: noop,
  getBoundingClientRect: () => ({ left:0, top:0, width:1280, height:720 })
};

const { Game } = await import('../src/game.js');
const g = new Game(canvas);
g.audio.enabled = false;

console.log('constructed      : ok');
console.log('fighters         :', g.fighters.length);
console.log('bots             :', g.bots.length);
console.log('level            :', g.level.name);

let rounds = 0;
const seenLevels = new Set();
for (let i = 0; i < 120000; i++) {
  const before = g.roundOver;
  g.update();
  g.draw();
  seenLevels.add(g.level.name);
  if (!before && g.roundOver) rounds++;
  if (g.matchOver) break;
}

console.log('rounds completed :', rounds);
console.log('levels rotated   :', seenLevels.size);
console.log('win tally        :', g.wins.join('-'));
console.log('match resolved   :', g.matchOver);
console.log('bullets leaked   :', g.bullets.length);
console.log('crates leaked    :', g.drops.drops.length);
console.log('coords finite    :', g.fighters.every(f => Number.isFinite(f.chest.x) && Number.isFinite(f.chest.y)));
