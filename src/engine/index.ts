import Timer from "./timer";
import { generateMainCode } from "./utils";
import { Code, IHistory, Result, Trial, Unsubscribe } from "./types";

type GameState = "TIME_CHANGE"
  | "TIMER_PAUSED"
  | "TIMER_RESUME"
  | "STARTED"
  | "COMPLETED"

interface GameStateData {
  type: GameState;
  data: Record<string, unknown>;
}

class GameManager {
  private completed = false;
  private readonly id: string;
  private readonly startTime: Date;
  private readonly mainCode: string;
  private readonly timer = new Timer();
  private readonly history: Array<Trial> = [];
  private listeners: Array<(state: GameStateData) => void> = [];

  constructor(id: string) {
    this.id = id;
    while (true) {
      try {
        this.startTime = new Date();
        const mainCode = generateMainCode();
        if (this.hasRepeatingCharacters(mainCode)) {
          continue;
        }
        this.mainCode = mainCode;
        this.startGameTimer();
        break;
      } catch {
        continue;
      }
    }
  }

  public isComplete(): boolean {
    return this.completed;
  }

  public getHistory(): IHistory {
    return {
      id: this.id,
      trials: this.history,
      mainCode: this.mainCode,
      startTime: this.startTime,
    };
  }

  public addTrial(testCode: Code): Result {
    const timestamp = this.timer.getElapsedTime();
    const result = this.calculate(this.mainCode, testCode);

    if (result.deadCount === 4) {
      this.completed = true;
      const event: GameStateData = {
        type: "COMPLETED",
        data: {
          code: testCode,
          trials: this.history.length,
          period: this.timer.getElapsedTime(),
        }
      }
      this.dispatchEvent(event);
    }

    this.history.push({
      result,
      testCode,
      timestamp,
    });

    return result;
  }

  public addListener(listener: (state: GameStateData) => void): Unsubscribe {
    this.listeners.push(listener);
    return () => {
      this.listeners = this
        .listeners
        .filter((item) => item !== listener);
    };
  }

  public pause() {
    this.timer.pause();
    const event: GameStateData = {
      type: "TIMER_PAUSED",
      data: {
        period: this.timer.getElapsedTime(),
      }
    }
    this.dispatchEvent(event);
  }

  public play() {
    this.timer.resume();
    const event: GameStateData = {
      type: "TIMER_RESUME",
      data: {
        period: this.timer.getElapsedTime(),
      }
    }
    this.dispatchEvent(event);
  }

  private dispatchEvent(event: GameStateData) {
    for (const listener of this.listeners) {
      listener(event);
    }
  }

  private startGameTimer() {
    this.timer.start();
    this.timer.addListener((period) => {
      const event: GameStateData = {
        type: "TIME_CHANGE",
        data: {
          period: period,
        }
      }
      this.dispatchEvent(event);
    });
  }

  private hasNonNumeric(code: string): boolean {
    for (const digit of code) {
      if (Number.isNaN(Number.parseInt(digit))) {
        return true;
      }
    }
    return false;
  }

  private calculate(mainCode: string, testCode: string): Result {
    if (this.hasRepeatingCharacters(testCode)) {
      throw new Error("TestCode has repeating characters");
    }

    if (this.hasNonNumeric(testCode)) {
      throw new Error("Testcode has non numeric characters");
    }

    const res: Result = {
      deadCount: 0,
      injuredCount: 0,
    };

    for (let i = 0; i <= testCode.length - 1; i++) {
      if (mainCode[i] == testCode[i]) {
        res.deadCount += 1;
        continue;
      }
      for (let j = 0; j <= testCode.length - 1; j++) {
        if (mainCode[i] == testCode[j]) {
          res.injuredCount += 1;
          continue;
        }
      }
    }

    return res;
  }

  private hasRepeatingCharacters(code: string): boolean {
    if (code.length <= 1) {
      return false;
    }

    const firstDigit = code.charAt(0);
    const remainingDigits = code.slice(1);

    if (remainingDigits.includes(firstDigit)) {
      return true;
    }

    return this.hasRepeatingCharacters(remainingDigits);
  }
}

export default GameManager;
