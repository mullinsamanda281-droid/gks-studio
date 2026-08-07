export class InputState {
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
    if (this.mouseLocked) { this.mouseX += e.movementX * 0.002; this.mouseY += e.movementY * 0.002; }
  };

  private onPointerLockChange = () => { this.mouseLocked = document.pointerLockElement === document.body; };

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
