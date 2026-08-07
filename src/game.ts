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
import { PickupManager, HazardManager } from './powerups.js';
import { Progression } from './progression.js';
import { SettingsManager, SettingsPanel } from './settings.js';
import { GameMode, HILL_CENTER, HILL_RADIUS } from './modes.js';

export class Game {
  pw = new PW();
  audio = new AudioFX();
  fx!: Effects;
  player!: Player;
  wm!: WMan;
  match!: Match;
  ui!: UI;
  input = new InputState();
  pickups!: PickupManager;
  hazards!: HazardManager;
  progression = new Progression();
  settings!: SettingsManager;
  mode = new GameMode('ffa');

  private scene = new THREE.Scene();
  private cam!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private enemies: Enemy[] = [];
  private clock = new THREE.Clock();
  private accumulator = 0;
  private panel!: SettingsPanel;

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

    this.pickups = new PickupManager(this.scene, this.pw, this.fx, this.audio);
    this.pickups.setSpawns(spawns.slice(0, 6));
    this.pickups.onPickup = (kind) => this.ui.logKill(0);

    this.hazards = new HazardManager(this.scene, this.pw, this.fx, this.audio);
    this.hazards.build();

    this.settings = new SettingsManager(this.audio);
    this.panel = new SettingsPanel(this.settings);
    this.settings.onChange = (s) => this.applySettings(s.fov, s.quality);
    this.applySettings(this.settings.settings.fov, this.settings.settings.quality);

    addEventListener('resize', () => { this.cam.aspect = innerWidth / innerHeight; this.cam.updateProjectionMatrix(); this.renderer.setSize(innerWidth, innerHeight); });
    this.gameLoop();
  }

  private allTargets(): Char[] { return [this.player, ...this.enemies]; }

  private applySettings(fov: number, quality: 'low' | 'medium' | 'high') {
    const preset = this.settings.getPreset();
    this.cam.fov = fov;
    this.cam.updateProjectionMatrix();
    this.renderer.shadowMap.enabled = preset.shadows;
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, preset.pixelRatio));
  }

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
        if (e.alive && e.hp <= 0) {
          e.die();
          this.match.registerKill();
          this.mode.onKill(true);
          this.progression.recordKill(false, this.match.combo);
          this.fx.death(v3(e.body.translation()));
        }
      }
      if (this.player.alive && this.player.hp <= 0) {
        this.player.die();
        this.progression.recordDeath();
        this.fx.death(v3(this.player.body.translation()));
      }
      this.hazards.update(1 / 60, this.allTargets());
      this.match.update(1 / 60);
      this.mode.update(1 / 60, this.playerInHill(), this.enemies.filter(e => e.alive).length);
      this.accumulator -= 1 / 60;
    }

    this.player.updateCamera(dt);
    this.wm.update(dt);
    this.pickups.update(dt, this.player);
    this.fx.update(dt);
    this.ui.update(dt);

    const inp = this.input;
    if (inp.attack && this.player.alive) {
      const dir = new THREE.Vector3(); this.cam.getWorldDirection(dir);
      const pos = this.player.body.translation();
      if (this.wm.fire(dir, new THREE.Vector3(pos.x, pos.y + 1, pos.z))) inp.attack = false;
    }

    if (this.settings.settings.screenShake) {
      const shake = this.fx.getShakeOffset();
      if (shake.lengthSq() > 0) this.cam.position.add(shake);
    }
    this.renderer.render(this.scene, this.cam);
  };

  private playerInHill(): boolean {
    const p = this.player.body.translation();
    return Math.hypot(p.x - HILL_CENTER.x, p.z - HILL_CENTER.z) < HILL_RADIUS;
  }
}
