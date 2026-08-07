# Stick Arena

3D low-poly stick-figure arena shooter. Fight AI bots across a 40×40 arena with 7 weapons, dashes, double jumps, wall jumps, pickups and hazards. Built with Three.js + Rapier3D + Vite.

## Play

```bash
npm install
npm run dev     # dev server on :3000
npm run build   # production build in dist/
npm run preview # serve dist/
```

Click to lock the mouse pointer, then:

| Input | Action |
|-------|--------|
| WASD | Move |
| Space | Jump (double jump, wall jump) |
| Shift | Sprint |
| E | Air dash |
| Mouse | Aim |
| Left click | Shoot |
| Right click | Zoom |
| Esc | Settings |

## Features

- **Movement** — jump buffering, coyote time, air control, dashes, wall slide/jump
- **7 weapons** — pistol, shotgun, SMG, rifle, sword (3-hit combos), rocket, grenade launcher
- **AI bots** — patrol/chase/strafe/retreat states, vision cones, 4 difficulty tiers, dodging
- **Pickups** — health, armor, ammo, double damage, rapid fire, shield
- **Hazards** — lava pools, spike traps, jump pads, explosive barrels
- **6 game modes** — FFA, Team Deathmatch, Gun Game, King of the Hill, Survival, Last Stick Standing
- **Progression** — XP curve, 12 unlocks, 5 daily challenges, persistent stats
- **Settings** — quality presets, audio mixer, sensitivity/FOV/UI scale, 4 colorblind palettes
- **Juice** — particle pooling, muzzle flashes, shell casings, screen shake, slow-mo, combos

## Architecture

```
src/
  main.ts         entry point
  game.ts         main loop, scene/renderer setup, system wiring
  player.ts       movement, camera, dash, wall interactions
  enemy.ts        AI state machine, difficulty, perception
  char.ts         shared character base (health, body, model)
  combat.ts       weapon framework, weapon configs, projectiles
  powerups.ts     pickups, buffs, arena hazards
  modes.ts        game mode rules (pure logic, no rendering)
  progression.ts  XP, unlocks, daily challenges, localStorage
  settings.ts     settings model + panel UI
  match.ts        scoring, combo, HUD
  input.ts        keyboard/mouse state
  physics.ts      Rapier wrapper, collision groups
  world.ts        arena geometry builder
  fx.ts           particle pool, VFX, synthesized audio
```

Gameplay logic (`modes.ts`, `progression.ts`) is kept free of rendering dependencies so it can be tested in isolation.

## Stack

Three.js · @dimforge/rapier3d (WASM physics) · Vite · TypeScript (strict)

## CI

`.github/workflows/ci.yml` runs typecheck + build on every push and PR, and uploads the `dist/` artifact.
