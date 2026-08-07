import * as THREE from 'three';
import * as R from '@dimforge/rapier3d';
export const G = { P:0x1,E:0x2,R:0x4,W:0x8,K:0x10,H:0x40 } as const;
export const CG=(m:number,f:number)=>((m&f)<<16)|f;
export const v3=(v:{x:number;y:number;z:number}):THREE.Vector3=>new THREE.Vector3(v.x,v.y,v.z);
export class PW{world!:R.World;init(){this.world=new R.World({x:0,y:-14.7,z:0})}step(){this.world.step()}
body(d:R.RigidBodyDesc){return this.world.createRigidBody(d)}col(d:R.ColliderDesc,b:R.RigidBody){return this.world.createCollider(d,b)}
rm(b:R.RigidBody){this.world.removeRigidBody(b)}ray(o:THREE.Vector3,dir:THREE.Vector3,d:number,g?:number){const r=new R.Ray({x:o.x,y:o.y,z:o.z},{x:dir.x,y:dir.y,z:dir.z});return this.world.castRay(r,d,true,R.QueryFilterFlags.EXCLUDE_SENSORS,g)}
hp(o:THREE.Vector3,dir:THREE.Vector3,h:R.RayColliderHit){return new THREE.Vector3(o.x+dir.x*h.timeOfImpact,o.y+dir.y*h.timeOfImpact,o.z+dir.z*h.timeOfImpact)}}
export const RAY=(w:R.World,o:any,dir:any,d:number,g?:number)=>{const r=new R.Ray(o,dir);return w.castRay(r,d,true,R.QueryFilterFlags.EXCLUDE_SENSORS,g)};
