export type Code = string;

export interface AppAction {
  value?: string;
  type: "input" | "clear",
}

export type AppState = string;

export type Unsubscribe = () => void;


export interface Result {
  deadCount: number;
  injuredCount: number;
}

export interface Trial {
  result: Result;
  testCode: string;
  timestamp: number;
}

export interface IHistory {
  id: string;
  mainCode: Code;
  startTime: Date;
  trials: Array<Trial>;
}

