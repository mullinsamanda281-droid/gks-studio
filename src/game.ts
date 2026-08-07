import * as THREE from 'three';
import { PW, v3 } from './physics.js';
import { Char } from './char.js';
import { Arena } from './world.js';
import { WMan } from './combat.js';
import { Effects, AudioFX } from './fx.js';
import { Player } from './player.js';
import { Enemy } from './enemy.js';
import { Match, UI } from './match.js';
import { InputState } from './input.js';

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
    this.renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas') as HTMLCanvasElement, antialias: true, powerPreference: 'high-performance' });
    this.renderer.setSize(innerWidth, innerHeight);
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.2;

    this.scene.background = new THREE.Color(0x1a1a2e);
    this.scene.fog = new THREE.Fog(0x1a1a2e, 30, 80);
    this.cam = new THREE.PerspectiveCamera(70, innerWidth / innerHeight, 0.1, 200);
    this.cam.position.set(0, 5, 10);

    const ambient = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambient);
    const sun = new THREE.DirectionalLight(0xffffee, 1.5);
    sun.position.set(30, 50, 20); sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.left = sun.shadow.camera.bottom = -40;
    sun.shadow.camera.right = sun.shadow.camera.top = 40;
    this.scene.add(sun);
    const fill = new THREE.DirectionalLight(0x88aaff, 0.3);
    fill.position.set(-20, 20, -20); this.scene.add(fill);

    await this.audio.init();
    this.pw.init();
    this.input.init();
    this.fx = new Effects(this.scene);

    const arena = new Arena(this.scene, this.pw);
    arena.build();

    this.player = new Player(this.scene, this.pw, this.input, this.cam, this.fx, this.audio);
    this.match = new Match(this);
    this.ui = new UI(this);

    this.wm = new WMan(this.scene, this.pw, this.player, this.fx, this.audio, this.allTargets());
    this.wm.onPickup = (name) => { this.ui.clearLog(); this.audio.play('pickup'); };
    this.wm.onRecoil = (r) => this.player.applyRecoil(r);
    this.wm.init();

    const spawns = (this.scene as any).userData.arena.spawns;
    for (let i = 0; i < 6; i++) {
      const sp = spawns[Math.floor(Math.random() * spawns.length)];
      this.enemies.push(new Enemy(this.scene, this.pw, this.player, this.fx, this.audio, sp.x, sp.z, Math.min(1, 0.3 + i * 0.12)));
    }

    addEventListener('resize', () => { this.cam.aspect = innerWidth / innerHeight; this.cam.updateProjectionMatrix(); this.renderer.setSize(innerWidth, innerHeight); });
    this.gameLoop();
  }

  private allTargets(): Char[] { return [this.player, ...this.enemies]; }

  private gameLoop = () => {
    requestAnimationFrame(this.gameLoop);
    const dt = Math.min(this.clock.getDelta(), 0.1);
    const timeScale = this.fx.getSlowFactor();
    this.accumulator += dt * timeScale;

    while (this.accumulator >= 1 / 60) {
      this.pw.step();
      this.player.updatePhysics(1 / 60);
      for (const e of this.enemies) e.updatePhysics(1 / 60);
      for (const e of this.enemies) {
        if (e.alive && e.hp <= 0) { e.die(); this.match.registerKill(); this.fx.death(v3(e.body.translation())); }
      }
      if (this.player.alive && this.player.hp <= 0) { this.player.die(); this.fx.death(v3(this.player.body.translation())); }
      this.match.update(1 / 60);
      this.accumulator -= 1 / 60;
    }

    this.player.updateCamera(dt);
    this.wm.update(dt);
    this.fx.update(dt);
    this.ui.update(dt);

    const inp = this.input;
    if (inp.attack && this.player.alive) {
      const dir = new THREE.Vector3(); this.cam.getWorldDirection(dir);
      const pos = this.player.body.translation();
      if (this.wm.fire(dir, new THREE.Vector3(pos.x, pos.y + 1, pos.z))) inp.attack = false;
    }

    const shake = this.fx.getShakeOffset();
    if (shake.lengthSq() > 0) this.cam.position.add(shake);
    this.renderer.render(this.scene, this.cam);
  };
}
