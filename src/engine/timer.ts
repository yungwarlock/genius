import { Unsubscribe } from "./types";


class Timer {
  private elapsedTime = 0;
  private readonly interval = 1000;
  private timer: ReturnType<typeof setTimeout> | null = null;

  private listeners: Array<(period: number) => void> = [];
  private stateChangeListeners: Array<(state: boolean) => void> = [];


  public start() {
    if (this.timer) {
      clearInterval(this.timer);
    }

    this.timer = setInterval(() => {
      this.elapsedTime += 1;
      this.dispatch(this.elapsedTime);
    }, this.interval);
    this.dispatchTimerState(true);
  }

  public stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
      this.dispatchTimerState(false);
    }
  }

  public addTimerStateListener(listener: (state: boolean) => void): Unsubscribe {
    this.stateChangeListeners.push(listener);
    return () => {
      this.stateChangeListeners = this
        .stateChangeListeners
        .filter((item) => item !== listener);
    };
  }

  public addListener(listener: (period: number) => void): Unsubscribe {
    this.listeners.push(listener);
    return () => {
      this.listeners = this
        .listeners
        .filter((item) => item !== listener);
    };
  }

  private dispatch(period: number) {
    for (const listener of this.listeners) {
      listener(period);
    }
  }

  private dispatchTimerState(state: boolean) {
    for (const listener of this.stateChangeListeners) {
      listener(state);
    }
  }

  public reset() {
    this.elapsedTime = 0;
  }

  public getElapsedTime() {
    return this.elapsedTime;
  }

  public pause() {
    this.stop();
  }

  public resume() {
    this.start();
  }

  public isPaused() {
    return this.timer === null;
  }

  public toggle(): boolean {
    if (this.timer) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }
}

export default Timer;