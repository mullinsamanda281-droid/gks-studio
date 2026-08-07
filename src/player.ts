import * as THREE from 'three';
import { PW, G, v3 } from './physics.js';
import { Char } from './char.js';
import { Effects, AudioFX, setCameraListener } from './fx.js';
import { InputState } from './input.js';

export class Player extends Char {
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
    if (!this.alive) { this.respawnT -= dt; if (this.respawnT <= 0) this.respawn(); return; }
    const grounded = this.isGrounded();
    if (grounded) { this.jumpsUsed = 0; this.coyoteTimer = this.COYOTE_TIME; this.isWallSliding = false; }
    else this.coyoteTimer -= dt;
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
    if (inp.forward) mz -= 1; if (inp.backward) mz += 1;
    if (inp.left) mx -= 1; if (inp.right) mx += 1;
    const move = new THREE.Vector3(mx, 0, mz);
    if (move.lengthSq() > 0) move.normalize();
    const sin = Math.sin(this.yaw), cos = Math.cos(this.yaw);
    const worldDir = new THREE.Vector3(move.x * cos - move.z * sin, 0, move.x * sin + move.z * cos);
    const speed = inp.sprint && grounded ? this.SPRINT_SPEED : this.WALK_SPEED;
    const accel = (grounded ? this.GROUND_ACCEL : this.AIR_ACCEL) * dt;
    const vel = this.body.linvel();
    this.body.setLinvel({ x: vel.x + (worldDir.x * speed - vel.x) * accel, y: vel.y, z: vel.z + (worldDir.z * speed - vel.z) * accel }, true);
  }

  private handleJump(dt: number, grounded: boolean) {
    if (this.input.jumpPressed) this.jumpBufferTimer = this.JUMP_BUFFER_TIME; else this.jumpBufferTimer -= dt;
    if (this.jumpBufferTimer <= 0 || this.dashTimer > 0) return;
    const vel = this.body.linvel();
    if (grounded || this.coyoteTimer > 0) {
      this.body.setLinvel({ x: vel.x, y: this.JUMP_FORCE, z: vel.z }, true);
      this.coyoteTimer = 0; this.jumpBufferTimer = 0; this.fx.dust(v3(this.body.translation())); this.audio.play('jump');
    } else if (this.jumpsUsed < 1) {
      this.jumpsUsed++;
      this.body.setLinvel({ x: vel.x, y: this.JUMP_FORCE * 0.92, z: vel.z }, true);
      this.jumpBufferTimer = 0; this.fx.dust(v3(this.body.translation())); this.audio.play('jump');
    } else if (this.isWallSliding) {
      this.body.setLinvel({ x: -this.wallNormal.x * 10 + vel.x * 0.3, y: this.JUMP_FORCE * 1.05, z: -this.wallNormal.z * 10 + vel.z * 0.3 }, true);
      this.isWallSliding = false; this.jumpBufferTimer = 0; this.audio.play('jump');
    }
  }

  private handleDash(dt: number, grounded: boolean) {
    if (this.dashTimer > 0) {
      this.dashTimer -= dt; this.body.setLinvel(this.dashDir, true);
      if (this.dashTimer <= 0) { const v = this.body.linvel(); this.body.setLinvel({ x: v.x * 0.5, y: v.y * 0.3, z: v.z * 0.5 }, true); }
      return;
    }
    this.dashCooldown -= dt;
    if (!this.input.dashPressed || this.dashCooldown > 0) return;
    const inp = this.input;
    let mx = 0, mz = 0;
    if (inp.forward) mz -= 1; if (inp.backward) mz += 1; if (inp.left) mx -= 1; if (inp.right) mx += 1;
    const dir = new THREE.Vector3(mx, 0, mz);
    if (dir.lengthSq() === 0) dir.set(Math.sin(this.yaw), 0, Math.cos(this.yaw));
    dir.normalize();
    const sin = Math.sin(this.yaw), cos = Math.cos(this.yaw);
    this.dashDir.set(dir.x * cos - dir.z * sin, 0.2, dir.x * sin + dir.z * cos);
    this.dashDir.multiplyScalar(this.DASH_SPEED);
    const v = this.body.linvel(); this.dashDir.y = v.y * 0.3;
    this.body.setLinvel(this.dashDir, true);
    this.dashTimer = this.DASH_DURATION; this.dashCooldown = this.DASH_COOLDOWN;
    this.fx.dash(v3(this.body.translation())); this.audio.play('dash');
  }

  private handleWallSlide(dt: number, grounded: boolean) {
    if (grounded || this.dashTimer > 0) { this.isWallSliding = false; return; }
    const vel = this.body.linvel();
    if (Math.hypot(vel.x, vel.z) < 3) { this.isWallSliding = false; return; }
    const dir = new THREE.Vector3(vel.x, 0, vel.z).normalize();
    const hit = this.pw.ray(v3(this.body.translation()), dir, 0.7, G.W);
    if (hit) { this.isWallSliding = true; this.wallNormal.copy(dir).negate(); if (vel.y < -3) this.body.setLinvel({ x: vel.x, y: vel.y * 0.5, z: vel.z }, true); }
    else this.isWallSliding = false;
  }

  private decayRecoil(dt: number) { if (this.recoilPitch > 0) this.recoilPitch = Math.max(0, this.recoilPitch - dt * 2); }
  private clampFallSpeed() { const vel = this.body.linvel(); if (vel.y < -this.MAX_FALL_SPEED) this.body.setLinvel({ x: vel.x, y: -this.MAX_FALL_SPEED, z: vel.z }, true); }
  applyRecoil(amount: number) { this.recoilPitch = Math.min(this.recoilPitch + amount, 0.3); }

  updateCamera(dt: number) {
    if (this.input.mouseLocked) {
      this.yaw += this.input.mouseX; this.pitch += this.input.mouseY;
      this.pitch = Math.max(-1.2, Math.min(1.2, this.pitch + this.recoilPitch));
      this.input.mouseX = 0; this.input.mouseY = 0;
    }
    const pos = this.body.translation();
    const eye = new THREE.Vector3(pos.x + Math.sin(this.yaw + Math.PI / 2) * 0.4, pos.y + 1.1, pos.z + Math.cos(this.yaw + Math.PI / 2) * 0.4);
    const camTarget = new THREE.Vector3(pos.x - Math.sin(this.yaw) * Math.cos(this.pitch) * 6, pos.y + 1.3 + Math.sin(this.pitch) * 6, pos.z - Math.cos(this.yaw) * Math.cos(this.pitch) * 6);
    this.cam.position.lerp(camTarget, 1 - Math.exp(-10 * dt));
    this.cam.lookAt(eye); setCameraListener(this.cam.position);
  }

  override die() { super.die(); this.respawnT = 1.0; }

  respawn() {
    const arena = (this.s as any).userData.arena;
    const sp = arena?.getRandomSpawn() ?? { x: 0, y: 1, z: 0 };
    this.teleport(sp.x, sp.y + 2, sp.z);
  }
}
