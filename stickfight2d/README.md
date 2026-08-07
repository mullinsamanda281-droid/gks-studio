# Stick Fight 2D

A 2D physics brawler in the spirit of Stick Fight. Four ragdoll stick figures
fight over weapons that drop from the sky. Shoot them off the map or empty their
health bar. First to five round wins takes the match.

No build step, no dependencies — open the file and play.

## Run

```bash
cd stickfight2d
python3 -m http.server 8000
# then open http://localhost:8000
```

Any static server works. ES modules require `http://`, so opening `index.html`
directly from disk will not load.

## Controls

| Input | Action |
|-------|--------|
| `A` / `D` | Move |
| `W` / `Space` | Jump |
| Mouse | Aim |
| Click | Shoot |
| `P` | Pause |
| `R` | Restart match |

Walk over a crate to pick up the weapon inside.

## Weapons

| Weapon | Damage | Ammo | Notes |
|--------|--------|------|-------|
| Pistol | 14 | 12 | Reliable baseline |
| Shotgun | 9 × 6 | 6 | Heavy knockback, close range |
| SMG | 7 | 34 | Fast, inaccurate |
| Sniper | 46 | 4 | Near-instant, huge knockback |
| Rocket | 38 | 3 | Arcing, explodes on impact |
| Bat | 26 | ∞ | Melee, strongest knockback |

## How it works

Each fighter is seven Verlet points joined by distance constraints. The torso
chain is stiff; arms and legs are slack, which is what produces the floppy
ragdoll motion for free — there is no skeletal animation anywhere in the code.

```
src/
  physics.js   Verlet points, distance constraints, platform collision
  fighter.js   ragdoll rig, movement, damage, death
  weapons.js   weapon table, crates, projectiles
  ai.js        bot controller with ledge avoidance
  level.js     three arena layouts
  fx.js        pooled particles, screen shake, Web Audio synth
  game.js      round flow, collision resolution, rendering, HUD
```

Ring-outs are the main kill condition, so every arena leaves its sides open and
knockback scales with weapon power.

## Tests

Headless simulations that run the real modules — no browser required.

```bash
node test/smoke.mjs        # 2400 frames of bot-vs-bot combat
node test/integration.mjs  # full match to a winner via the Game class
```

`smoke.mjs` asserts bots find crates, shoot, stay on the map and keep finite
coordinates. `integration.mjs` stubs a canvas, drives the real game loop, and
confirms rounds advance, levels rotate and a match resolves without leaking
bullets or crates.
