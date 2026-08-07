import * as THREE from 'three';
import * as R from '@dimforge/rapier3d';
import { PW, CG, G, RAY } from './physics.js';
export class Stickman {
  static build(c: number): THREE.Group {
    const g = new THREE.Group();
    const m = new THREE.MeshStandardMaterial({ color: c, roughness: 0.6, flatShading: true });
    const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.22, 0.5, 3, 8), m); body.position.y = 0.4;
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.26, 10, 8), m); head.position.y = 1.15;
    const arm = new THREE.CylinderGeometry(0.07, 0.07, 0.75, 6), leg = new THREE.CylinderGeometry(0.09, 0.09, 0.8, 6);
    const la = new THREE.Mesh(arm, m); la.position.set(0.3, 0.55, 0); la.rotation.z = -0.3;
    const ra = new THREE.Mesh(arm, m); ra.position.set(-0.3, 0.55, 0); ra.rotation.z = 0.3;
    const ll = new THREE.Mesh(leg, m); ll.position.set(0.15, -0.35, 0);
    const rl = new THREE.Mesh(leg, m); rl.position.set(-0.15, -0.35, 0);
    [body, head, la, ra, ll, rl].forEach(x => { x.castShadow = true; g.add(x); });
    return g;
  }
}
export class Char {
  body!: R.RigidBody; model: THREE.Group; hp = 100; alive = true; yaw = 0;
  grounded = false; respawnT = 0; health = 100; dying = false;
  constructor(protected s: THREE.Scene, protected pw: PW, color: number, x: number, y: number, z: number, protected group: number) {
    this.model = Stickman.build(color); this.s.add(this.model); this.model.visible = false;
    this.body = pw.body(R.RigidBodyDesc.dynamic().setTranslation(x, y, z).setLinearDamping(0.1).setAngularDamping(0.5).setCcdEnabled(true));
    pw.col(R.ColliderDesc.capsule(0.5, 0.35).setMass(3).setFriction(0.2).setRestitution(0.1)
      .setCollisionGroups(CG(this.group, G.W | G.P | G.E)), this.body);
    this.pos = new THREE.Vector3(x, y, z);
  }
  pos: THREE.Vector3;
  isGrounded(): boolean { const p = this.body.translation(); return RAY(this.pw.world, { x: p.x, y: p.y - 0.8, z: p.z }, { x: 0, y: -1, z: 0 }, 0.6, G.W) !== null; }
  die() { this.alive = false; this.respawnT = 3; this.model.visible = false; }
  sync() { const p = this.body.translation(); this.pos.set(p.x, p.y, p.z); this.model.position.set(p.x, p.y - 0.85, p.z); }
  teleport(x: number, y: number, z: number) { this.body.setTranslation({ x, y, z }, true); this.body.setLinvel({ x: 0, y: 0, z: 0 }, true); this.hp = 100; this.alive = true; this.dying = false; this.model.visible = true; }
}
