import * as THREE from 'three';
import * as R from '@dimforge/rapier3d';
import { PW, CG, G, v3 } from './physics.js';
import { Char } from './char.js';
import { Effects, AudioFX } from './fx.js';

export type PickupKind = 'health' | 'armor' | 'ammo' | 'damage' | 'rapid' | 'shield';

const PICKUP_RADIUS = 1.5;
const RESPAWN_SEC = 15;
const BUFF_SEC = 10;
const HEALTH_GAIN = 35;
const ARMOR_GAIN = 50;
const SHIELD_ABSORB = 50;
const HP_CAP = 100;

const KIND_COLOR: Record<PickupKind, number> = {
  health: 0x2ecc71, armor: 0x3498db, ammo: 0xf1c40f,
  damage: 0xe74c3c, rapid: 0xe67e22, shield: 0x9b59b6
};

interface Pickup {
  kind: PickupKind;
  mesh: THREE.Mesh;
  pos: THREE.Vector3;
  cooldown: number;
  bob: number;
}

export class PickupManager {
  onPickup: ((kind: PickupKind) => void) | null = null;
  armor = 0;
  private items: Pickup[] = [];
  private damageTimer = 0;
  private rapidTimer = 0;
  private shield = 0;

  constructor(private s: THREE.Scene, private pw: PW, private fx: Effects, private audio: AudioFX) {}

  setSpawns(points: { x: number; y: number; z: number }[]) {
    const kinds: PickupKind[] = ['health', 'armor', 'ammo', 'damage', 'rapid', 'shield'];
    points.forEach((p, i) => {
      const kind = kinds[i % kinds.length]!;
      this.items.push(this.create(kind, p.x, p.y + 1, p.z));
    });
  }

  private create(kind: PickupKind, x: number, y: number, z: number): Pickup {
    const color = KIND_COLOR[kind];
    const mesh = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.35),
      new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.6, roughness: 0.3 })
    );
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    this.s.add(mesh);
    return { kind, mesh, pos: new THREE.Vector3(x, y, z), cooldown: 0, bob: Math.random() * 6.28 };
  }

  update(dt: number, player: Char) {
    this.damageTimer = Math.max(0, this.damageTimer - dt);
    this.rapidTimer = Math.max(0, this.rapidTimer - dt);

    for (const item of this.items) {
      if (item.cooldown > 0) {
        item.cooldown -= dt;
        if (item.cooldown <= 0) item.mesh.visible = true;
        continue;
      }
      item.bob += dt * 2;
      item.mesh.rotation.y += dt * 2;
      item.mesh.position.y = item.pos.y + Math.sin(item.bob) * 0.15;
      if (!player.alive) continue;
      const p = player.body.translation();
      if (Math.hypot(p.x - item.pos.x, p.y - item.pos.y, p.z - item.pos.z) < PICKUP_RADIUS) {
        this.collect(item, player);
      }
    }
  }

  private collect(item: Pickup, player: Char) {
    this.apply(item.kind, player);
    item.mesh.visible = false;
    item.cooldown = RESPAWN_SEC;
    this.audio.play('pickup');
    this.fx.impact(item.pos.clone(), new THREE.Vector3(0, 1, 0), 'metal');
    this.onPickup?.(item.kind);
  }

  private apply(kind: PickupKind, player: Char) {
    if (kind === 'health') player.hp = Math.min(HP_CAP, player.hp + HEALTH_GAIN);
    else if (kind === 'armor') this.armor = Math.min(100, this.armor + ARMOR_GAIN);
    else if (kind === 'shield') this.shield = SHIELD_ABSORB;
    else if (kind === 'damage') this.damageTimer = BUFF_SEC;
    else if (kind === 'rapid') this.rapidTimer = BUFF_SEC;
  }

  absorb(damage: number): number {
    let remaining = damage;
    if (this.shield > 0) {
      const used = Math.min(this.shield, remaining);
      this.shield -= used;
      remaining -= used;
    }
    if (this.armor > 0 && remaining > 0) {
      const used = Math.min(this.armor, remaining * 0.5);
      this.armor -= used;
      remaining -= used;
    }
    return remaining;
  }

  getActiveBuffs() {
    return {
      damageMult: this.damageTimer > 0 ? 2 : 1,
      fireRateMult: this.rapidTimer > 0 ? 2 : 1,
      shield: this.shield
    };
  }

  reset() {
    this.armor = 0;
    this.shield = 0;
    this.damageTimer = 0;
    this.rapidTimer = 0;
    for (const item of this.items) { item.cooldown = 0; item.mesh.visible = true; }
  }
}

const LAVA_DPS = 15;
const SPIKE_DAMAGE = 25;
const SPIKE_COOLDOWN = 1;
const PAD_LAUNCH = 18;

interface Zone { pos: THREE.Vector3; half: number }

export class HazardManager {
  private lava: Zone[] = [];
  private spikes: Zone[] = [];
  private pads: Zone[] = [];
  private hurtCooldown = new Map<Char, number>();

  constructor(private s: THREE.Scene, private pw: PW, private fx: Effects, private audio: AudioFX) {}

  build() {
    this.addLava(-14, 6); this.addLava(14, -6);
    this.addSpikes(-6, -6); this.addSpikes(6, 6);
    this.addSpikes(-6, 6); this.addSpikes(6, -6);
    this.addPad(8, 8); this.addPad(-8, -8);
  }

  private addLava(x: number, z: number) {
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(4, 4),
      new THREE.MeshStandardMaterial({ color: 0xff4400, emissive: 0xff2200, emissiveIntensity: 0.8 })
    );
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.set(x, 0.05, z);
    this.s.add(mesh);
    this.lava.push({ pos: new THREE.Vector3(x, 0, z), half: 2 });
  }

  private addSpikes(x: number, z: number) {
    const mat = new THREE.MeshStandardMaterial({ color: 0x95a5a6, metalness: 0.7, roughness: 0.3 });
    for (let i = 0; i < 4; i++) {
      const spike = new THREE.Mesh(new THREE.ConeGeometry(0.15, 0.6, 5), mat);
      spike.position.set(x + (i % 2) * 0.7 - 0.35, 0.3, z + Math.floor(i / 2) * 0.7 - 0.35);
      spike.castShadow = true;
      this.s.add(spike);
    }
    this.spikes.push({ pos: new THREE.Vector3(x, 0, z), half: 1 });
  }

  private addPad(x: number, z: number) {
    const mesh = new THREE.Mesh(
      new THREE.CylinderGeometry(0.9, 0.9, 0.2, 12),
      new THREE.MeshStandardMaterial({ color: 0x1abc9c, emissive: 0x16a085, emissiveIntensity: 0.7 })
    );
    mesh.position.set(x, 0.1, z);
    this.s.add(mesh);
    this.pads.push({ pos: new THREE.Vector3(x, 0, z), half: 0.9 });
  }

  update(dt: number, chars: Char[]) {
    for (const char of chars) {
      if (!char.alive) continue;
      const cd = (this.hurtCooldown.get(char) ?? 0) - dt;
      this.hurtCooldown.set(char, Math.max(0, cd));
      const p = char.body.translation();

      if (this.inside(p, this.lava)) {
        char.hp -= LAVA_DPS * dt;
        if (Math.random() < 0.1) this.fx.impact(v3(p), new THREE.Vector3(0, 1, 0), 'metal');
      }
      if (cd <= 0 && this.inside(p, this.spikes)) {
        char.hp -= SPIKE_DAMAGE;
        this.hurtCooldown.set(char, SPIKE_COOLDOWN);
        this.fx.impact(v3(p), new THREE.Vector3(0, 1, 0), 'enemy');
        this.audio.play('hit', 0.5);
      }
      if (this.inside(p, this.pads)) {
        const vel = char.body.linvel();
        if (vel.y < PAD_LAUNCH * 0.5) {
          char.body.setLinvel({ x: vel.x, y: PAD_LAUNCH, z: vel.z }, true);
          this.audio.play('jump', 0.6);
        }
      }
    }
  }

  private inside(p: { x: number; y: number; z: number }, zones: Zone[]): boolean {
    if (p.y > 2) return false;
    for (const z of zones) {
      if (Math.abs(p.x - z.pos.x) < z.half && Math.abs(p.z - z.pos.z) < z.half) return true;
    }
    return false;
  }
}
