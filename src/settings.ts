import { AudioFX } from './fx.js';

const STORAGE_KEY = 'stickarena.settings';

export type Quality = 'low' | 'medium' | 'high';
export type ColorMode = 'normal' | 'deuteranopia' | 'protanopia' | 'tritanopia' | 'contrast';

export interface Settings {
  quality: Quality;
  masterVolume: number;
  sfxVolume: number;
  musicVolume: number;
  sensitivity: number;
  invertY: boolean;
  fov: number;
  uiScale: number;
  screenShake: boolean;
  colorMode: ColorMode;
  subtitles: boolean;
}

export const DEFAULTS: Settings = {
  quality: 'high', masterVolume: 0.5, sfxVolume: 1, musicVolume: 0.3,
  sensitivity: 1, invertY: false, fov: 70, uiScale: 1,
  screenShake: true, colorMode: 'normal', subtitles: false
};

export const QUALITY_PRESETS: Record<Quality, { shadows: boolean; shadowSize: number; pixelRatio: number; particles: number }> = {
  low: { shadows: false, shadowSize: 512, pixelRatio: 1, particles: 25 },
  medium: { shadows: true, shadowSize: 1024, pixelRatio: 1.5, particles: 50 },
  high: { shadows: true, shadowSize: 2048, pixelRatio: 2, particles: 100 }
};

const PALETTES: Record<ColorMode, { player: number; enemy: number; pickup: number }> = {
  normal: { player: 0x4fc3f7, enemy: 0xe74c3c, pickup: 0x2ecc71 },
  deuteranopia: { player: 0x0072b2, enemy: 0xd55e00, pickup: 0xf0e442 },
  protanopia: { player: 0x0072b2, enemy: 0xe69f00, pickup: 0xf0e442 },
  tritanopia: { player: 0xd55e00, enemy: 0xcc79a7, pickup: 0x009e73 },
  contrast: { player: 0xffffff, enemy: 0xff0000, pickup: 0xffff00 }
};

export class SettingsManager {
  settings: Settings;
  onChange: ((s: Settings) => void) | null = null;

  constructor(private audio: AudioFX) {
    this.settings = this.load();
    this.applyAudio();
  }

  private load(): Settings {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { ...DEFAULTS };
      return { ...DEFAULTS, ...(JSON.parse(raw) as Partial<Settings>) };
    } catch {
      return { ...DEFAULTS };
    }
  }

  save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(this.settings)); } catch { /* ignore */ }
  }

  set<K extends keyof Settings>(key: K, value: Settings[K]) {
    this.settings[key] = value;
    if (key === 'masterVolume' || key === 'sfxVolume' || key === 'musicVolume') this.applyAudio();
    this.save();
    this.onChange?.(this.settings);
  }

  private applyAudio() {
    this.audio.setMasterVolume(this.settings.masterVolume);
    this.audio.setSfxVolume(this.settings.sfxVolume);
    this.audio.setMusicVolume(this.settings.musicVolume);
  }

  getPreset() { return QUALITY_PRESETS[this.settings.quality]; }
  getPalette() { return PALETTES[this.settings.colorMode]; }
  reset() { this.settings = { ...DEFAULTS }; this.applyAudio(); this.save(); this.onChange?.(this.settings); }
}

export class SettingsPanel {
  private root: HTMLDivElement;
  private open = false;

  constructor(private mgr: SettingsManager) {
    this.root = document.createElement('div');
    this.root.style.cssText = [
      'position:fixed', 'inset:0', 'background:rgba(0,0,0,0.88)', 'color:#fff',
      'display:none', 'flex-direction:column', 'align-items:center', 'justify-content:center',
      'gap:10px', 'z-index:300', 'font:14px system-ui'
    ].join(';');
    document.body.appendChild(this.root);
    this.build();
    addEventListener('keydown', (e) => { if (e.code === 'Escape') this.toggle(); });
  }

  private build() {
    const s = this.mgr.settings;
    const title = document.createElement('h2');
    title.textContent = 'SETTINGS';
    this.root.appendChild(title);

    this.addSelect('Quality', ['low', 'medium', 'high'], s.quality, (v) => this.mgr.set('quality', v as Quality));
    this.addSlider('Master Volume', 0, 1, s.masterVolume, (v) => this.mgr.set('masterVolume', v));
    this.addSlider('SFX Volume', 0, 1, s.sfxVolume, (v) => this.mgr.set('sfxVolume', v));
    this.addSlider('Music Volume', 0, 1, s.musicVolume, (v) => this.mgr.set('musicVolume', v));
    this.addSlider('Sensitivity', 0.2, 3, s.sensitivity, (v) => this.mgr.set('sensitivity', v));
    this.addSlider('FOV', 60, 110, s.fov, (v) => this.mgr.set('fov', v));
    this.addSlider('UI Scale', 0.7, 1.6, s.uiScale, (v) => this.mgr.set('uiScale', v));
    this.addToggle('Invert Y', s.invertY, (v) => this.mgr.set('invertY', v));
    this.addToggle('Screen Shake', s.screenShake, (v) => this.mgr.set('screenShake', v));
    this.addToggle('Subtitles', s.subtitles, (v) => this.mgr.set('subtitles', v));
    this.addSelect('Color Mode', ['normal', 'deuteranopia', 'protanopia', 'tritanopia', 'contrast'], s.colorMode, (v) => this.mgr.set('colorMode', v as ColorMode));

    const close = document.createElement('button');
    close.textContent = 'CLOSE (Esc)';
    close.style.cssText = 'margin-top:14px;padding:10px 30px;background:#e74c3c;border:0;border-radius:6px;color:#fff;cursor:pointer';
    close.onclick = () => this.toggle();
    this.root.appendChild(close);
  }

  private row(label: string): HTMLDivElement {
    const row = document.createElement('div');
    row.style.cssText = 'display:flex;align-items:center;gap:12px;width:340px;justify-content:space-between';
    const name = document.createElement('span');
    name.textContent = label;
    row.appendChild(name);
    this.root.appendChild(row);
    return row;
  }

  private addSlider(label: string, min: number, max: number, value: number, onInput: (v: number) => void) {
    const row = this.row(label);
    const input = document.createElement('input');
    input.type = 'range';
    input.min = String(min); input.max = String(max); input.step = '0.05';
    input.value = String(value);
    input.oninput = () => onInput(parseFloat(input.value));
    row.appendChild(input);
  }

  private addToggle(label: string, value: boolean, onChange: (v: boolean) => void) {
    const row = this.row(label);
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.checked = value;
    input.onchange = () => onChange(input.checked);
    row.appendChild(input);
  }

  private addSelect(label: string, options: string[], value: string, onChange: (v: string) => void) {
    const row = this.row(label);
    const select = document.createElement('select');
    for (const opt of options) {
      const o = document.createElement('option');
      o.value = opt; o.textContent = opt;
      select.appendChild(o);
    }
    select.value = value;
    select.onchange = () => onChange(select.value);
    row.appendChild(select);
  }

  toggle() {
    this.open = !this.open;
    this.root.style.display = this.open ? 'flex' : 'none';
    if (this.open && document.pointerLockElement) document.exitPointerLock();
  }
}
