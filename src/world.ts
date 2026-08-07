import * as THREE from 'three';
import * as R from '@dimforge/rapier3d';
import { PW, CG, G } from './physics.js';
export class Arena {
  spawns: { x: number; y: number; z: number }[] = [];
  barrels: { b: R.RigidBody; m: THREE.Mesh }[] = [];
  private n = 40;
  constructor(private s: THREE.Scene, private pw: PW) { (s as any).userData.arena = this; }
  box(x: number, y: number, z: number, sx: number, sy: number, sz: number, c: number) {
    const b = this.pw.body(R.RigidBodyDesc.fixed().setTranslation(x, y, z));
    this.pw.col(R.ColliderDesc.cuboid(sx / 2, sy / 2, sz / 2).setFriction(0.5).setRestitution(0.1)
      .setCollisionGroups(CG(G.W, G.P | G.E | G.R | G.K)), b);
    const m = new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz), new THREE.MeshStandardMaterial({ color: c, roughness: 0.8, flatShading: true }));
    m.position.set(x, y, z); m.castShadow = m.receiveShadow = true; this.s.add(m);
  }
  build() {
    this.box(0, -0.5, 0, this.n, 1, this.n, 0x2d3a4a);
    const top = new THREE.Mesh(new THREE.PlaneGeometry(this.n, this.n), new THREE.MeshStandardMaterial({ color: 0x34495e, roughness: 0.9 }));
    top.rotation.x = -Math.PI / 2; top.position.y = 0.01; top.receiveShadow = true; this.s.add(top);
    const grid = new THREE.GridHelper(this.n, 20, 0x4a6b8a, 0x3a5270); grid.position.y = 0.02; this.s.add(grid);
    const h = 5, t = 1;
    ([[0, h / 2, -this.n / 2, this.n + 2, h, t], [0, h / 2, this.n / 2, this.n + 2, h, t], [-this.n / 2, h / 2, 0, t, h, this.n + 2], [this.n / 2, h / 2, 0, t, h, this.n + 2]] as const)
      .forEach(([x, y, z, sx, sy, sz]) => this.box(x, y, z, sx, sy, sz, 0x445566));
    ([[-10, 2.5, -8, 5, 0.4, 3], [10, 2.5, 8, 5, 0.4, 3], [-10, 4.5, 8, 4, 0.4, 2], [10, 4.5, -8, 4, 0.4, 2], [0, 6, 0, 3, 0.4, 3]] as const)
      .forEach(([x, y, z, sx, sz]) => this.box(x, y, z, sx, 0.4, sz, 0x8e44ad));
    ([[-5, 0.5, 3, 1], [5, 0.5, -3, 1], [-3, 0.5, -5, 1.5], [3, 0.5, 5, 1.5], [0, 0.5, 8, 1], [0, 1.5, 8, 1], [8, 0.5, 0, 1], [-8, 0.5, 0, 1], [0, 0.5, -8, 1], [0, 1, -8, 1]] as const)
      .forEach(([x, y, z, s]) => this.box(x, y, z, s, s, s, 0xc0392b));
    const rv = new Float32Array([0, 0, 6, 4, 0, 6, 0, 2.5, 0, 4, 0, 6, 4, 2.5, 0, 0, 2.5, 0, 0, 0, 6, 0, 2.5, 0, 0, 0, 0, 4, 2.5, 0, 4, 0, 6, 0, 2.5, 0]);
    const ri = new Uint32Array([0, 1, 2, 1, 3, 2, 4, 5, 6, 7, 8, 9]);
    const ramp = (x: number, z: number, ry: number) => {
      const m = new THREE.Mesh(new THREE.BufferGeometry(), new THREE.MeshStandardMaterial({ color: 0xe67e22, roughness: 0.7, flatShading: true, side: THREE.DoubleSide }));
      (m.geometry as any).setAttribute('position', new THREE.BufferAttribute(rv, 3)); (m.geometry as any).computeVertexNormals();
      m.position.set(x, 0, z); m.rotation.y = ry; m.castShadow = true; this.s.add(m);
      const b = this.pw.body(R.RigidBodyDesc.fixed().setTranslation(x, 0, z).setRotation({ x: 0, y: ry, z: 0, w: Math.cos(ry / 2) }));
      this.pw.col(R.ColliderDesc.trimesh(rv as any, ri).setFriction(0.6).setCollisionGroups(CG(G.W, G.P | G.E | G.R)), b);
    };
    ramp(-15, -12, 0); ramp(15, 12, Math.PI); ramp(-15, 12, Math.PI / 2); ramp(15, -12, -Math.PI / 2);
    ([[-12, -5], [12, 5], [-6, 10], [6, -10], [0, -13], [0, 13]] as const).forEach(([x, z]) => {
      const b = this.pw.body(R.RigidBodyDesc.dynamic().setTranslation(x, 0.7, z).setLinearDamping(0.5).setAngularDamping(0.5));
      this.pw.col(R.ColliderDesc.cylinder(0.6, 0.4).setMass(5).setFriction(0.6).setRestitution(0.3).setCollisionGroups(CG(G.W, G.P | G.E | G.R)), b);
      const m = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 1.2, 10), new THREE.MeshStandardMaterial({ color: 0xdc3545, roughness: 0.4, flatShading: true }));
      m.position.set(x, 0.7, z); m.castShadow = true; this.s.add(m);
      const lid = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.1, 10), new THREE.MeshStandardMaterial({ color: 0xa52838 }));
      lid.position.set(x, 1.25, z); this.s.add(lid);
      this.barrels.push({ b, m });
    });
    this.spawns = ([[-16, -16], [16, -16], [-16, 16], [16, 16], [0, -17], [0, 17], [-17, 0], [17, 0]] as [number, number][]).map(([x, z]) => ({ x, y: 1, z }));
    const cols = [0xff6b6b, 0x4ecdc4, 0x45b7d1, 0xf9ca24];
    ([[-10, 8, -10], [10, 8, -10], [-10, 8, 10], [10, 8, 10]] as [number, number, number][]).forEach(([x, y, z], i) => {
      const l = new THREE.PointLight(cols[i]!, 30, 25, 2); l.position.set(x, y, z); this.s.add(l);
    });
  }
}
