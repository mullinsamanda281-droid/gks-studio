import * as THREE from 'three';
import { PW, G, v3 } from './physics.js';
import { Char } from './char.js';
import { Effects, AudioFX } from './fx.js';
import { Player } from './player.js';

export class Enemy extends Char {
  private state = 'idle';
  private stateTimer = 0;
  private lastSeenPlayer = -999;
  private fireCooldown = 0;
  private patrolTarget = new THREE.Vector3();
  private strafeDir = 1;
  private stuckTimer = 0;
  private lastPosition = new THREE.Vector3();
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
    this.reactionTime = 0.5 - diff * 0.45;
    this.aimAccuracy = 0.5 + diff * 0.45;
    this.fireRateMult = 0.5 + diff * 0.7;
    this.canDodge = diff > 0.75;
  }

  updatePhysics(dt: number) {
    if (!this.alive) { this.respawnT -= dt; return; }
    this.stateTimer -= dt; this.fireCooldown -= dt; this.stuckTimer += dt;
    const pos = this.body.translation();
    const pp = this.player.body.translation();
    const dist = Math.hypot(pp.x - pos.x, pp.z - pos.z);
    const canSee = this.canSee(pos, pp, dist);
    if (canSee) this.lastSeenPlayer = performance.now();
    const seenFor = (performance.now() - this.lastSeenPlayer) / 1000;
    const lowHp = this.hp < 30;
    this.updateState(dist, canSee, seenFor, lowHp);
    this.executeState(dt, dist, canSee, pp, pos);
    this.sync();
    if (this.stuckTimer > 2) {
      const cur = this.body.translation();
      if (Math.hypot(cur.x - this.lastPosition.x, cur.z - this.lastPosition.z) < 0.3) {
        const a = Math.random() * Math.PI * 2;
        this.body.setLinvel({ x: Math.sin(a) * 6, y: 4, z: Math.cos(a) * 6 }, true);
      }
      this.stuckTimer = 0; this.lastPosition.set(cur.x, cur.y, cur.z);
    }
  }

  private updateState(dist: number, canSee: boolean, seenFor: number, lowHp: boolean) {
    switch (this.state) {
      case 'idle':
        if (canSee) this.state = 'attack';
        else if (this.stateTimer <= 0) { this.state = 'patrol'; this.patrolTarget.set(this.patrolTarget.x + (Math.random() - 0.5) * 16, 0, this.patrolTarget.z + (Math.random() - 0.5) * 16); this.stateTimer = 3 + Math.random() * 3; }
        break;
      case 'patrol':
        if (canSee) this.state = 'attack';
        else if (this.stateTimer <= 0) { this.state = 'idle'; this.stateTimer = Math.random() * 2; }
        break;
      case 'attack':
        if (!canSee && seenFor > 2) { this.state = 'patrol'; this.stateTimer = 4; const p = this.player.body.translation(); this.patrolTarget.set(p.x, 0, p.z); }
        else if (lowHp) { this.state = 'retreat'; this.stateTimer = 2.5; }
        break;
      case 'retreat':
        if (this.stateTimer <= 0 || this.hp > 60) this.state = 'attack';
        break;
    }
  }

  private executeState(dt: number, dist: number, canSee: boolean, pp: any, pos: any) {
    const vel = this.body.linvel();
    switch (this.state) {
      case 'idle': this.body.setLinvel({ x: vel.x * 0.9, y: vel.y, z: vel.z * 0.9 }, true); break;
      case 'patrol': this.moveToward(this.patrolTarget, 5, dt, pos); break;
      case 'attack': {
        this.yaw = Math.atan2(pp.x - pos.x, pp.z - pos.z);
        this.moveToward({ x: pp.x, z: pp.z }, 3.5, dt, pos);
        if (this.canDodge && Math.random() < 0.02) this.strafeDir *= -1;
        if (this.canDodge) { const s = new THREE.Vector3(-(pp.z - pos.z), 0, pp.x - pos.x).normalize(); const v = this.body.linvel(); this.body.setLinvel({ x: v.x + s.x * this.strafeDir * 3 * dt, y: v.y, z: v.z + s.z * this.strafeDir * 3 * dt }, true); }
        if (this.fireCooldown <= 0 && dist < 25) { this.shoot(pp, pos); this.fireCooldown = Math.max(0.3, 1.0 - this.reactionTime) / this.fireRateMult; }
        if (Math.random() < 0.015 && this.isGrounded()) this.body.setLinvel({ x: vel.x, y: 7, z: vel.z }, true);
        break;
      }
      case 'retreat': {
        const dx = pos.x - pp.x, dz = pos.z - pp.z, d = Math.hypot(dx, dz) || 1;
        this.yaw = Math.atan2(-dx, -dz); this.body.setLinvel({ x: (dx / d) * 6.5, y: vel.y, z: (dz / d) * 6.5 }, true); break;
      }
    }
  }

  private moveToward(target: { x: number; z: number }, speed: number, dt: number, pos: any) {
    const dx = target.x - pos.x, dz = target.z - pos.z, d = Math.hypot(dx, dz);
    if (d < 0.5) return;
    this.yaw = Math.atan2(dx, dz);
    const vel = this.body.linvel(), accel = 8 * dt;
    this.body.setLinvel({ x: vel.x + ((dx / d) * speed - vel.x) * accel, y: vel.y, z: vel.z + ((dz / d) * speed - vel.z) * accel }, true);
  }

  private shoot(pp: any, pos: any) {
    const acc = this.aimAccuracy;
    const dir = new THREE.Vector3(pp.x - pos.x + (Math.random() - 0.5) * (1 - acc) * 5, pp.y - pos.y + (Math.random() - 0.5) * (1 - acc) * 3, pp.z - pos.z + (Math.random() - 0.5) * (1 - acc) * 5).normalize();
    const origin = new THREE.Vector3(pos.x, pos.y + 1, pos.z);
    const hit = this.pw.ray(origin, dir, 50, G.P | G.W | G.R);
    this.fx.muzzleFlash(origin, dir, 'pistol');
    this.fx.trail(origin, hit ? this.pw.hp(origin, dir, hit) : origin.clone().add(dir.clone().multiplyScalar(50)));
    this.audio.play('shot', 0.4);
    if (hit && (hit as any).collider?.rigidBody === this.player.body) { this.player.hp -= Math.ceil(8 + Math.random() * 6); this.fx.impact(this.pw.hp(origin, dir, hit), dir, 'enemy'); }
  }

  private canSee(pos: any, pp: any, dist: number): boolean {
    if (dist > 30 || !this.player.alive) return false;
    const facing = new THREE.Vector3(Math.sin(this.yaw), 0, Math.cos(this.yaw));
    const toP = new THREE.Vector3(pp.x - pos.x, 0, pp.z - pos.z).normalize();
    if (Math.acos(THREE.MathUtils.clamp(facing.dot(toP), -1, 1)) * (180 / Math.PI) > 40) return false;
    const origin = new THREE.Vector3(pos.x, pos.y + 1, pos.z);
    return !this.pw.ray(origin, new THREE.Vector3(pp.x - pos.x, pp.y - pos.y, pp.z - pos.z).normalize(), dist, G.W);
  }
}
