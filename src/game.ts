import * as THREE from 'three';
import { PW, G, v3 } from './physics.js';
import { Char } from './char.js';
import { Arena } from './world.js';
import { WMan, WCFG, WType } from './combat.js';
import { Effects, AudioFX, setCameraListener } from './fx.js';

type Difficulty = 'easy' | 'medium' | 'hard' | 'insane';

class Player extends Char {
  kills = 0;
  private pitch = 0;
  private jumpsUsed = 0;
  private coyoteTimer = 0;
  private jumpBufferTimer = 0;
  private wallNormal = new THREE.Vector3();
  private isWallSliding = false;
  private dashTimer = 0;
  private dashCooldown = 0;
  private dashDir = new THREE.Vector3();
  private recoilPitch = 0;

  readonly WALK_SPEED = 6;
  readonly SPRINT_SPEED = 10;
  readonly AIR_ACCEL = 5;
  readonly GROUND_ACCEL = 12;
  readonly JUMP_FORCE = 8.5;
  readonly MAX_FALL_SPEED = 22;
  readonly DASH_SPEED = 18;
  readonly DASH_DURATION = 0.15;
  readonly DASH_COOLDOWN = 0.5;
  readonly COYOTE_TIME = 0.12;
  readonly JUMP_BUFFER_TIME = 0.15;

  constructor(scene: THREE.Scene, physics: PW, private input: InputState, private cam: THREE.PerspectiveCamera, private fx: Effects, private audio: AudioFX) {
    super(scene, physics, 0x4fc3f7, 0, 3, 0, G.P);
  }

  get lookYaw() { return this.yaw; }
  get lookPitch() { return this.pitch; }

  updatePhysics(dt: number) {
    if (!this.alive) {
      this.respawnT -= dt;
      if (this.respawnT <= 0) this.respawn();
      return;
    }

    const grounded = this.isGrounded();
    if (grounded) {
      this.jumpsUsed = 0;
      this.coyoteTimer = this.COYOTE_TIME;
      this.isWallSliding = false;
    } else {
      this.coyoteTimer -= dt;
    }

    this.applyMovement(dt, grounded);
    this.handleJump(dt, grounded);
    this.handleDash(dt, grounded);
    this.handleWallSlide(dt, grounded);
    this.decayRecoil(dt);
    this.clampFallSpeed();
    this.sync();
  }

  private applyMovement(dt: number, grounded: boolean) {
    const inp = this.input;
    let mx = 0, mz = 0;
    if (inp.forward) mz -= 1;
    if (inp.backward) mz += 1;
    if (inp.left) mx -= 1;
    if (inp.right) mx += 1;

    const move = new THREE.Vector3(mx, 0, mz);
    if (move.lengthSq() > 0) move.normalize();

    // Transform local input to world space based on camera yaw
    const sin = Math.sin(this.yaw);
    const cos = Math.cos(this.yaw);
    const worldDir = new THREE.Vector3(
      move.x * cos - move.z * sin,
      0,
      move.x * sin + move.z * cos
    );

    const speed = inp.sprint && grounded ? this.SPRINT_SPEED : this.WALK_SPEED;
    const accel = (grounded ? this.GROUND_ACCEL : this.AIR_ACCEL) * dt;
    const vel = this.body.linvel();

    const targetX = worldDir.x * speed;
    const targetZ = worldDir.z * speed;
    this.body.setLinvel({
      x: vel.x + (targetX - vel.x) * accel,
      y: vel.y,
      z: vel.z + (targetZ - vel.z) * accel
    }, true);
  }

  private handleJump(dt: number, grounded: boolean) {
    if (this.input.jumpPressed) this.jumpBufferTimer = this.JUMP_BUFFER_TIME;
    else this.jumpBufferTimer -= dt;

    if (this.jumpBufferTimer <= 0) return;
    if (this.dashTimer > 0) return;

    const vel = this.body.linvel();

    if (grounded || this.coyoteTimer > 0) {
      this.body.setLinvel({ x: vel.x, y: this.JUMP_FORCE, z: vel.z }, true);
      this.coyoteTimer = 0;
      this.jumpBufferTimer = 0;
      this.fx.dust(v3(this.body.translation()));
      this.audio.play('jump');
    } else if (this.jumpsUsed < 1) {
      // Double jump
      this.jumpsUsed++;
      this.body.setLinvel({ x: vel.x, y: this.JUMP_FORCE * 0.92, z: vel.z }, true);
      this.jumpBufferTimer = 0;
      this.fx.dust(v3(this.body.translation()));
      this.audio.play('jump');
    } else if (this.isWallSliding) {
      // Wall jump: launch away from wall and up
      this.body.setLinvel({
        x: -this.wallNormal.x * 10 + vel.x * 0.3,
        y: this.JUMP_FORCE * 1.05,
        z: -this.wallNormal.z * 10 + vel.z * 0.3
      }, true);
      this.isWallSliding = false;
      this.jumpBufferTimer = 0;
      this.audio.play('jump');
    }
  }

  private handleDash(dt: number, grounded: boolean) {
    if (this.dashTimer > 0) {
      this.dashTimer -= dt;
      this.body.setLinvel(this.dashDir, true);
      if (this.dashTimer <= 0) {
        const v = this.body.linvel();
        this.body.setLinvel({ x: v.x * 0.5, y: v.y * 0.3, z: v.z * 0.5 }, true);
      }
      return;
    }

    this.dashCooldown -= dt;
    if (!this.input.dashPressed || this.dashCooldown > 0) return;

    const inp = this.input;
    let mx = 0, mz = 0;
    if (inp.forward) mz -= 1;
    if (inp.backward) mz += 1;
    if (inp.left) mx -= 1;
    if (inp.right) mx += 1;

    const dir = new THREE.Vector3(mx, 0, mz);
    if (dir.lengthSq() === 0) dir.set(Math.sin(this.yaw), 0, Math.cos(this.yaw));
    dir.normalize();

    const sin = Math.sin(this.yaw);
    const cos = Math.cos(this.yaw);
    this.dashDir.set(
      dir.x * cos - dir.z * sin,
      0.2,
      dir.x * sin + dir.z * cos
    );
    this.dashDir.multiplyScalar(this.DASH_SPEED);

    const v = this.body.linvel();
    this.dashDir.y = v.y * 0.3;
    this.body.setLinvel(this.dashDir, true);
    this.dashTimer = this.DASH_DURATION;
    this.dashCooldown = this.DASH_COOLDOWN;
    this.fx.dash(v3(this.body.translation()));
    this.audio.play('dash');
  }

  private handleWallSlide(dt: number, grounded: boolean) {
    if (grounded || this.dashTimer > 0) {
      this.isWallSliding = false;
      return;
    }

    const vel = this.body.linvel();
    const speed = Math.hypot(vel.x, vel.z);
    if (speed < 3) { this.isWallSliding = false; return; }

    // Check for wall in movement direction
    const dir = new THREE.Vector3(vel.x, 0, vel.z).normalize();
    const hit = this.pw.ray(v3(this.body.translation()), dir, 0.7, G.W);

    if (hit) {
      this.isWallSliding = true;
      this.wallNormal.copy(dir).negate();
      // Slow fall while wall sliding
      if (vel.y < -3) {
        this.body.setLinvel({ x: vel.x, y: vel.y * 0.5, z: vel.z }, true);
      }
    } else {
      this.isWallSliding = false;
    }
  }

  private decayRecoil(dt: number) {
    if (this.recoilPitch > 0) {
      this.recoilPitch = Math.max(0, this.recoilPitch - dt * 2);
    }
  }

  private clampFallSpeed() {
    const vel = this.body.linvel();
    if (vel.y < -this.MAX_FALL_SPEED) {
      this.body.setLinvel({ x: vel.x, y: -this.MAX_FALL_SPEED, z: vel.z }, true);
    }
  }

  applyRecoil(amount: number) {
    this.recoilPitch = Math.min(this.recoilPitch + amount, 0.3);
  }

  updateCamera(dt: number) {
    if (this.input.mouseLocked) {
      this.yaw += this.input.mouseX;
      this.pitch += this.input.mouseY;
      this.pitch = Math.max(-1.2, Math.min(1.2, this.pitch + this.recoilPitch));
      this.input.mouseX = 0;
      this.input.mouseY = 0;
    }

    const pos = this.body.translation();
    const eye = new THREE.Vector3(
      pos.x + Math.sin(this.yaw + Math.PI / 2) * 0.4,
      pos.y + 1.1,
      pos.z + Math.cos(this.yaw + Math.PI / 2) * 0.4
    );

    const camTarget = new THREE.Vector3(
      pos.x - Math.sin(this.yaw) * Math.cos(this.pitch) * 6,
      pos.y + 1.3 + Math.sin(this.pitch) * 6,
      pos.z - Math.cos(this.yaw) * Math.cos(this.pitch) * 6
    );

    this.cam.position.lerp(camTarget, 1 - Math.exp(-10 * dt));
    this.cam.lookAt(eye);

    // Feed camera position to audio system for positional sound
    setCameraListener(this.cam.position);
  }

  override die() {
    super.die();
    this.respawnT = 1.0;
  }

  respawn() {
    const arena = (this.s as any).userData.arena;
    const sp = arena?.getRandomSpawn() ?? { x: 0, y: 1, z: 0 };
    this.teleport(sp.x, sp.y + 2, sp.z);
  }
}

class Enemy extends Char {
  private state = 'idle';
  private stateTimer = 0;
  private lastSeenPlayer = -999;
  private fireCooldown = 0;
  private patrolTarget = new THREE.Vector3();
  private strafeDir = 1;
  private strafeTimer = 0;
  private stuckTimer = 0;
  private lastPosition = new THREE.Vector3();

  // Difficulty tuning
  private reactionTime = 0.3;
  private aimAccuracy = 0.7;
  private fireRateMult = 1;
  private canDodge = false;

  constructor(scene: THREE.Scene, physics: PW, private player: Player, private fx: Effects, private audio: AudioFX, x: number, z: number, diff = 0.5) {
    super(scene, physics, 0xe74c3c, x, 3, z, G.E);
    this.patrolTarget.set(x, 0, z);
    this.stateTimer = Math.random() * 1.5;
    this.setDifficulty(diff);
  }

  setDifficulty(diff: number) {
    // diff: 0 (easy) to 1 (insane)
    this.reactionTime = 0.5 - diff * 0.45;
    this.aimAccuracy = 0.5 + diff * 0.45;
    this.fireRateMult = 0.5 + diff * 0.7;
    this.canDodge = diff > 0.75;
  }

  updatePhysics(dt: number) {
    if (!this.alive) {
      this.respawnT -= dt;
      return;
    }

    this.stateTimer -= dt;
    this.fireCooldown -= dt;
    this.stuckTimer += dt;

    const pos = this.body.translation();
    const playerPos = this.player.body.translation();
    const dist = Math.hypot(playerPos.x - pos.x, playerPos.z - pos.z);
    const canSee = this.canSeePlayer(pos, playerPos, dist);

    if (canSee) this.lastSeenPlayer = performance.now();
    const seenFor = (performance.now() - this.lastSeenPlayer) / 1000;
    const lowHp = this.hp < 30;

    this.updateState(dist, canSee, seenFor, lowHp);
    this.executeState(dt, dist, canSee, playerPos, pos);
    this.sync();

    // Stuck detection: if barely moved in 2s, try to unstick
    if (this.stuckTimer > 2) {
      const cur = this.body.translation();
      if (Math.hypot(cur.x - this.lastPosition.x, cur.z - this.lastPosition.z) < 0.3) {
        const angle = Math.random() * Math.PI * 2;
        this.body.setLinvel({ x: Math.sin(angle) * 6, y: 4, z: Math.cos(angle) * 6 }, true);
      }
      this.stuckTimer = 0;
      this.lastPosition.set(cur.x, cur.y, cur.z);
    }
  }

  private updateState(dist: number, canSee: boolean, seenFor: number, lowHp: boolean) {
    switch (this.state) {
      case 'idle':
        if (canSee) this.state = 'attack';
        else if (this.stateTimer <= 0) {
          this.state = 'patrol';
          this.patrolTarget.set(
            this.patrolTarget.x + (Math.random() - 0.5) * 16,
            0,
            this.patrolTarget.z + (Math.random() - 0.5) * 16
          );
          this.stateTimer = 3 + Math.random() * 3;
        }
        break;
      case 'patrol':
        if (canSee) this.state = 'attack';
        else if (this.stateTimer <= 0) { this.state = 'idle'; this.stateTimer = Math.random() * 2; }
        break;
      case 'attack':
        if (!canSee && seenFor > 2) {
          this.state = 'patrol';
          this.stateTimer = 4;
          const pp = this.player.body.translation();
          this.patrolTarget.set(pp.x, 0, pp.z);
        } else if (lowHp) {
          this.state = 'retreat';
          this.stateTimer = 2.5;
        }
        break;
      case 'retreat':
        if (this.stateTimer <= 0 || this.hp > 60) this.state = 'attack';
        break;
    }
  }

  private executeState(dt: number, dist: number, canSee: boolean, playerPos: any, pos: any) {
    const vel = this.body.linvel();
    const speed = 5;
    const pp = playerPos;

    switch (this.state) {
      case 'idle':
        this.body.setLinvel({ x: vel.x * 0.9, y: vel.y, z: vel.z * 0.9 }, true);
        break;

      case 'patrol':
        this.moveToward(this.patrolTarget, speed, dt, pos);
        break;

      case 'attack': {
        this.yaw = Math.atan2(pp.x - pos.x, pp.z - pos.z);
        this.moveToward({ x: pp.x, z: pp.z }, speed * 0.7, dt, pos);

        // Strafe to dodge if insane difficulty
        if (this.canDodge && Math.random() < 0.02) {
          this.strafeDir *= -1;
        }
        if (this.canDodge) {
          const strafe = new THREE.Vector3(-(pp.z - pos.z), 0, pp.x - pos.x).normalize();
          const v = this.body.linvel();
          this.body.setLinvel({
            x: v.x + strafe.x * this.strafeDir * 3 * dt,
            y: v.y,
            z: v.z + strafe.z * this.strafeDir * 3 * dt
          }, true);
        }

        if (this.fireCooldown <= 0 && dist < 25) {
          this.shoot(pp, pos);
          this.fireCooldown = Math.max(0.3, 1.0 - this.reactionTime) / this.fireRateMult;
        }

        // Random jump
        if (Math.random() < 0.015 && this.isGrounded()) {
          this.body.setLinvel({ x: vel.x, y: 7, z: vel.z }, true);
        }
        break;
      }

      case 'retreat': {
        const dx = pos.x - pp.x;
        const dz = pos.z - pp.z;
        const d = Math.hypot(dx, dz) || 1;
        this.yaw = Math.atan2(-dx, -dz);
        this.body.setLinvel({ x: (dx / d) * speed * 1.3, y: vel.y, z: (dz / d) * speed * 1.3 }, true);
        break;
      }
    }
  }

  private moveToward(target: { x: number; z: number }, speed: number, dt: number, pos: any) {
    const dx = target.x - pos.x;
    const dz = target.z - pos.z;
    const d = Math.hypot(dx, dz);
    if (d < 0.5) return;

    this.yaw = Math.atan2(dx, dz);
    const vel = this.body.linvel();
    const accel = 8 * dt;
    this.body.setLinvel({
      x: vel.x + ((dx / d) * speed - vel.x) * accel,
      y: vel.y,
      z: vel.z + ((dz / d) * speed - vel.z) * accel
    }, true);
  }

  private shoot(playerPos: any, pos: any) {
    const accuracy = this.aimAccuracy;
    const dir = new THREE.Vector3(
      playerPos.x - pos.x + (Math.random() - 0.5) * (1 - accuracy) * 5,
      playerPos.y - pos.y + (Math.random() - 0.5) * (1 - accuracy) * 3,
      playerPos.z - pos.z + (Math.random() - 0.5) * (1 - accuracy) * 5
    ).normalize();

    const origin = new THREE.Vector3(pos.x, pos.y + 1, pos.z);
    const hit = this.pw.ray(origin, dir, 50, G.P | G.W | G.R);

    this.fx.muzzleFlash(origin, dir, 'pistol');
    this.fx.trail(origin, hit ? this.pw.hp(origin, dir, hit) : origin.clone().add(dir.clone().multiplyScalar(50)));
    this.audio.play('shot', 0.4);

    if (hit && (hit as any).collider?.rigidBody === this.player.body) {
      const dmg = Math.ceil(8 + Math.random() * 6);
      this.player.hp -= dmg;
      this.fx.impact(this.pw.hp(origin, dir, hit), dir, 'enemy');
    }
  }

  private canSeePlayer(pos: any, playerPos: any, dist: number): boolean {
    if (dist > 30 || !this.player.alive) return false;

    // Field of view check (80 degrees)
    const facing = new THREE.Vector3(Math.sin(this.yaw), 0, Math.cos(this.yaw));
    const toPlayer = new THREE.Vector3(playerPos.x - pos.x, 0, playerPos.z - pos.z).normalize();
    const angle = Math.acos(THREE.MathUtils.clamp(facing.dot(toPlayer), -1, 1)) * (180 / Math.PI);
    if (angle > 40) return false;

    // Line of sight raycast
    const origin = new THREE.Vector3(pos.x, pos.y + 1, pos.z);
    const dir = new THREE.Vector3(playerPos.x - pos.x, playerPos.y - pos.y, playerPos.z - pos.z).normalize();
    return !this.pw.ray(origin, dir, dist, G.W);
  }
}

class Match {
  time = 180;
  over = false;
  winner = '';
  score = 0;
  combo = 0;
  comboTimer = 0;

  constructor(private game: Game) {}

  registerKill(enemy: Enemy) {
    this.score += 100;
    this.combo = Math.min(5, this.combo + 1);
    this.comboTimer = 5;
    this.game.fx.shake(0.3 + this.combo * 0.15, 0.3);
    this.game.player.kills++;
    this.game.fx.comboFlash(this.combo);
    this.game.audio.play('death', 0.3);
    this.game.ui.logKill(this.combo);
  }

  update(dt: number) {
    if (this.over) return;
    this.time -= dt;
    if (this.comboTimer > 0) this.comboTimer -= dt;
    if (this.comboTimer <= 0) this.combo = 0;
    if (this.time <= 0) this.endMatch();
  }

  private endMatch() {
    if (this.over) return;
    this.over = true;
    this.winner = this.score > 0 ? 'PLAYER' : 'NOBODY';
    this.game.audio.play('cheer');
    this.game.fx.slowMotion(0.3, 0.5);
    this.game.ui.showMatchEnd(this.winner, this.score);
  }

  restart() {
    this.over = false;
    this.time = 180;
    this.score = 0;
    this.combo = 0;
    this.comboTimer = 0;
    this.game.player.teleport(0, 3, 0);
    this.game.ui.hideMatchEnd();
    this.game.ui.clearLog();
  }
}

class UI {
  private healthBar: HTMLElement;
  private ammoText: HTMLElement;
  private weaponName: HTMLElement;
  private timerText: HTMLElement;
  private killFeed: HTMLElement;
  private comboText: HTMLElement;
  private endScreen: HTMLElement;
  private endTitle: HTMLElement;
  private restartBtn: HTMLElement;
  private damageOverlay: HTMLElement;

  constructor(private game: Game) {
    this.healthBar = document.getElementById('healthFill')!;
    this.ammoText = document.getElementById('ammoDisplay')!;
    this.weaponName = document.getElementById('weaponName')!;
    this.timerText = document.getElementById('timer')!;
    this.killFeed = document.getElementById('killFeed')!;
    this.comboText = document.getElementById('comboDisplay')!;
    this.endScreen = document.getElementById('matchEnd')!;
    this.endTitle = document.getElementById('winnerText')!;
    this.restartBtn = document.getElementById('restartBtn')!;

    this.damageOverlay = document.createElement('div');
    this.damageOverlay.style.cssText = 'position:fixed;inset:0;background:rgba(255,0,0,0.3);pointer-events:none;opacity:0;z-index:150;';
    document.body.appendChild(this.damageOverlay);

    this.restartBtn.onclick = () => this.game.match.restart();
  }

  logKill(combo: number) {
    const entry = document.createElement('div');
    entry.textContent = combo > 1 ? `Kill! COMBO x${combo}` : 'Kill!';
    this.killFeed.prepend(entry);
    setTimeout(() => entry.remove(), 3000);
  }

  showMatchEnd(winner: string, score: number) {
    this.endTitle.textContent = `${winner} WINS! Score: ${score}`;
    this.endScreen.classList.add('show');
  }

  hideMatchEnd() { this.endScreen.classList.remove('show'); }
  clearLog() { this.killFeed.innerHTML = ''; }

  update(dt: number) {
    const player = this.game.player;
    const hp = Math.max(0, player.hp);
    this.healthBar.style.width = `${hp}%`;
    this.healthBar.style.background = hp > 50 ? '#2ecc71' : hp > 25 ? '#f39c12' : '#e74c3c';
    this.damageOverlay.style.opacity = hp < 35 ? '0.3' : '0';

    const weapon = this.game.wm.current;
    if (weapon) {
      const cfg = weapon.cfg;
      const ammo = cfg.melee ? "Inf" : String(weapon.ammo);
      const def = WCFG[cfg.n as WType];
      const max = cfg.melee ? "Inf" : String(def?.a ?? "Inf");
      this.ammoText.textContent = cfg.melee ? 'Inf / Inf' : `${ammo} / ${max}`;
      this.weaponName.textContent = cfg.n;
    }

    const t = this.game.match.time;
    this.timerText.textContent = `${Math.floor(Math.max(0, t) / 60)}:${Math.floor(Math.max(0, t) % 60).toString().padStart(2, '0')}`;

    const combo = this.game.fx.getComboText();
    if (combo) { this.comboText.textContent = combo; this.comboText.style.opacity = '1'; }
    else this.comboText.style.opacity = '0';
  }
}

class InputState {
  keys = new Set<string>();
  forward = false;
  backward = false;
  left = false;
  right = false;
  sprint = false;
  jumpPressed = false;
  dashPressed = false;
  attack = false;
  aim = false;
  mouseX = 0;
  mouseY = 0;
  mouseLocked = false;

  private onKeyDown = (e: KeyboardEvent) => {
    this.keys.add(e.code);
    if (e.code === 'Space') this.jumpPressed = true;
    if (e.code === 'KeyE') this.dashPressed = true;
    this.updateState();
  };

  private onKeyUp = (e: KeyboardEvent) => {
    this.keys.delete(e.code);
    if (e.code === 'Space') this.jumpPressed = false;
    if (e.code === 'KeyE') this.dashPressed = false;
    this.updateState();
  };

  private onMouseDown = (e: MouseEvent) => {
    if (!this.mouseLocked && e.button === 0) document.body.requestPointerLock();
    if (e.button === 0) this.attack = true;
    if (e.button === 2) this.aim = true;
  };

  private onMouseUp = (e: MouseEvent) => {
    if (e.button === 0) this.attack = false;
    if (e.button === 2) this.aim = false;
  };

  private onMouseMove = (e: MouseEvent) => {
    if (this.mouseLocked) {
      this.mouseX += e.movementX * 0.002;
      this.mouseY += e.movementY * 0.002;
    }
  };

  private onPointerLockChange = () => {
    this.mouseLocked = document.pointerLockElement === document.body;
  };

  init() {
    addEventListener('keydown', this.onKeyDown);
    addEventListener('keyup', this.onKeyUp);
    addEventListener('mousedown', this.onMouseDown);
    addEventListener('mouseup', this.onMouseUp);
    addEventListener('mousemove', this.onMouseMove);
    addEventListener('contextmenu', (e) => e.preventDefault());
    addEventListener('pointerlockchange', this.onPointerLockChange);
  }

  private updateState() {
    this.forward = this.keys.has('KeyW');
    this.backward = this.keys.has('KeyS');
    this.left = this.keys.has('KeyA');
    this.right = this.keys.has('KeyD');
    this.sprint = this.keys.has('ShiftLeft');
  }
}

export class Game {
  pw = new PW();
  audio = new AudioFX();
  fx!: Effects;
  player!: Player;
  wm!: WMan;
  match!: Match;
  ui!: UI;
  input = new InputState();

  private scene = new THREE.Scene();
  private cam!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private enemies: Enemy[] = [];
  private clock = new THREE.Clock();
  private accumulator = 0;

  async init() {
    // Renderer setup
    this.renderer = new THREE.WebGLRenderer({
      canvas: document.getElementById('canvas') as HTMLCanvasElement,
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(innerWidth, innerHeight);
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.2;

    // Scene setup
    this.scene.background = new THREE.Color(0x1a1a2e);
    this.scene.fog = new THREE.Fog(0x1a1a2e, 30, 80);
    this.cam = new THREE.PerspectiveCamera(70, innerWidth / innerHeight, 0.1, 200);
    this.cam.position.set(0, 5, 10);

    // Lighting
    const ambient = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambient);
    const sun = new THREE.DirectionalLight(0xffffee, 1.5);
    sun.position.set(30, 50, 20);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.left = sun.shadow.camera.bottom = -40;
    sun.shadow.camera.right = sun.shadow.camera.top = 40;
    this.scene.add(sun);
    const fill = new THREE.DirectionalLight(0x88aaff, 0.3);
    fill.position.set(-20, 20, -20);
    this.scene.add(fill);

    // Systems
    await this.audio.init();
    this.pw.init();
    this.input.init();
    this.fx = new Effects(this.scene);

    // Arena
    const arena = new Arena(this.scene, this.pw);
    arena.build();

    // Player + weapons
    this.player = new Player(this.scene, this.pw, this.input, this.cam, this.fx, this.audio);
    this.match = new Match(this);
    this.ui = new UI(this);

    this.wm = new WMan(this.scene, this.pw, this.player, this.fx, this.audio, this.allTargets());
    this.wm.onPickup = (name) => { this.ui.clearLog(); this.audio.play('pickup'); };
    this.wm.onRecoil = (r) => this.player.applyRecoil(r);
    this.wm.init();

    // Spawn enemies
    const spawns = (this.scene as any).userData.arena.spawns;
    for (let i = 0; i < 6; i++) {
      const sp = spawns[Math.floor(Math.random() * spawns.length)];
      const diff = Math.min(1, 0.3 + i * 0.12);
      this.enemies.push(new Enemy(this.scene, this.pw, this.player, this.fx, this.audio, sp.x, sp.z, diff));
    }

    addEventListener('resize', () => {
      this.cam.aspect = innerWidth / innerHeight;
      this.cam.updateProjectionMatrix();
      this.renderer.setSize(innerWidth, innerHeight);
    });

    this.gameLoop();
  }

  private allTargets(): Char[] {
    return [this.player, ...this.enemies];
  }

  private gameLoop = () => {
    requestAnimationFrame(this.gameLoop);
    const dt = Math.min(this.clock.getDelta(), 0.1);
    const timeScale = this.fx.getSlowFactor();
    const scaledDt = dt * timeScale;
    this.accumulator += scaledDt;

    // Fixed timestep physics
    while (this.accumulator >= 1 / 60) {
      this.pw.step();
      this.player.updatePhysics(1 / 60);
      for (const e of this.enemies) e.updatePhysics(1 / 60);

      // Death detection
      for (const e of this.enemies) {
        if (e.alive && e.hp <= 0) {
          e.die();
          this.match.registerKill(e);
          this.fx.death(v3(e.body.translation()));
        }
      }
      if (this.player.alive && this.player.hp <= 0) {
        this.player.die();
        this.fx.death(v3(this.player.body.translation()));
      }

      this.match.update(1 / 60);
      this.accumulator -= 1 / 60;
    }

    // Variable timestep updates
    this.player.updateCamera(dt);
    this.wm.update(dt);
    this.fx.update(dt);
    this.ui.update(dt);

    // Handle player shooting
    const inp = this.input;
    if (inp.attack && this.player.alive) {
      const dir = new THREE.Vector3();
      this.cam.getWorldDirection(dir);
      const pos = this.player.body.translation();
      if (this.wm.fire(dir, new THREE.Vector3(pos.x, pos.y + 1, pos.z))) {
        inp.attack = false;
      }
    }

    // Apply screen shake to camera
    const shake = this.fx.getShakeOffset();
    if (shake.lengthSq() > 0) this.cam.position.add(shake);

    this.renderer.render(this.scene, this.cam);
  };
}
