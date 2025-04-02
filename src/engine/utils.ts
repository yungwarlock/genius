import { Result } from "./types";


export const formatResult = (result: Result) => {
  if (!result) return "";

  if (result.deadCount == 0 && result.injuredCount == 0) {
    return "None";
  }
  const deadCount = result?.deadCount !== 0 ? `${result?.deadCount} dead` : "";
  const injuredCount = result?.injuredCount != 0 ? `${result?.injuredCount} injured` : "";

  return deadCount + "  " + injuredCount;
};


export const generateMainCode = () => {
  return (Math.floor(1000 + (9999 - 1000) * Math.random())).toFixed();
};