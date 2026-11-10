export type MotionOptions = { duration: number; ease: string; alternate: boolean; loop: boolean };
export const easings: Record<string, string> = {
  linear: 'linear', 'in(3)': 'cubic-bezier(.55,.05,.8,.4)', 'out(3)': 'cubic-bezier(.2,.7,.3,1)',
  'inOut(3)': 'cubic-bezier(.65,0,.35,1)', outBounce: 'linear(0, .44 20%, 1 36%, .75 55%, 1 73%, .94 87%, 1)',
  outElastic: 'linear(0, 1.2 35%, .9 55%, 1.04 75%, 1)', inOutSine: 'cubic-bezier(.37,0,.63,1)', outBack: 'cubic-bezier(.18,.89,.32,1.28)',
};

/** Local playback coordinator built on Web Animations and requestAnimationFrame. */
export class NativePlayback {
  animations: Animation[] = [];
  currentTime = 0;
  playbackRate = 1;
  private frame = 0;
  private previous = 0;
  private running = false;
  constructor(public duration: number, private loop = false, private alternate = false, protected update: (progress: number) => void = () => {}) {}
  add(target: Element, frames: Keyframe[], timing: KeyframeAnimationOptions) {
    const animation = target.animate(frames, { fill: 'both', ...timing });
    animation.pause(); this.animations.push(animation); return this;
  }
  private render() {
    let time = this.loop && this.duration ? this.currentTime % this.duration : Math.min(this.currentTime, this.duration);
    if (this.alternate) time = time <= this.duration / 2 ? time * 2 : (this.duration - time) * 2;
    this.animations.forEach(animation => { animation.currentTime = time; });
    this.update(this.duration ? time / this.duration : 1);
  }
  seek(time: number) { this.currentTime = Math.max(0, Math.min(time, this.duration)); this.render(); }
  play() {
    if (this.running) return;
    this.running = true; this.previous = 0;
    const tick = (now: number) => {
      if (!this.running) return;
      if (this.previous) this.currentTime += (now - this.previous) * this.playbackRate;
      this.previous = now; this.render();
      if (!this.loop && this.currentTime >= this.duration) { this.pause(); return; }
      this.frame = requestAnimationFrame(tick);
    };
    this.frame = requestAnimationFrame(tick);
  }
  pause() { this.running = false; cancelAnimationFrame(this.frame); }
  restart() { this.pause(); this.seek(0); this.play(); }
  revert() { this.pause(); this.animations.forEach(animation => animation.cancel()); }
}

export type TimerState = { currentTime: number; iteration: number };
export type TimerOptions = {
  duration: number;
  delay?: number;
  loop?: boolean;
  frameRate?: number;
  onUpdate?: (state: TimerState) => void;
  onLoop?: (state: TimerState) => void;
};

/** A local timer with delay, callback throttling, and public iteration state. */
export class NativeTimer extends NativePlayback {
  constructor(options: TimerOptions) {
    const delay = Math.max(0, options.delay ?? 0);
    const activeDuration = Math.max(0, options.duration);
    const cycle = delay + activeDuration;
    super(cycle, Boolean(options.loop && cycle > 0));
    let lastUpdate = -Infinity;
    let lastIteration = 0;
    this.update = () => {
      const elapsed = this.currentTime;
      const iteration = options.loop && cycle ? Math.floor(elapsed / cycle) : 0;
      const position = options.loop && cycle ? elapsed % cycle : Math.min(elapsed, cycle);
      const state = { currentTime: Math.max(0, Math.min(activeDuration, position - delay)), iteration };
      const rewound = elapsed < lastUpdate;
      if (rewound) { lastUpdate = -Infinity; lastIteration = iteration; }
      if (iteration !== lastIteration) {
        lastIteration = iteration;
        options.onLoop?.(state);
      }
      if (position < delay) return;
      const interval = 1000 / Math.max(1, options.frameRate ?? 60);
      if (elapsed - lastUpdate + .001 >= interval || (!options.loop && position === cycle)) {
        lastUpdate = elapsed;
        options.onUpdate?.(state);
      }
    };
  }
}
