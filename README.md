# Stick Arena

3D low-poly stick-figure arena shooter. Fight 6 AI bots in a physics-based arena with 6 weapons, dashes, double jumps and wall jumps. Built with Three.js + Rapier3D + Vite.

## Play

```bash
npm install
npm run dev     # dev server on :3000
npm run build   # production build in dist/
npm run preview # serve dist/
```

Click to lock the mouse pointer, then:

- **WASD** move · **Space** jump (x2) · **Shift** sprint · **E** air dash
- **Mouse** aim · **Left click** shoot · **Right click** zoom
- **R** reload · **F** pickup

## Features

- 6 AI bots (patrol, chase, strafe, retreat, wall-hugging vision cones)
- 6 weapons: Pistol, Shotgun, SMG, Rifle, Rocket, Sword
- Physics knockback, explosive barrels, ramps, platforms
- Combo kills, kill feed, match timer, floating scores, camera shake
- Procedural stickmen, particles, synthesized WebAudio sound

## Stack

Three.js, @dimforge/rapier3d (WASM physics), Vite + TypeScript.
