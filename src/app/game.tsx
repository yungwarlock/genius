import React from "react";

import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { View, Text, StyleSheet, Pressable, Button } from "react-native";

import { nanoid } from "nanoid/non-secure";

import GameManager from "@/engine";
import { Result } from "@/engine/types";
import Keypad from "@/ui/components/Keypad";
import History from "@/ui/components/History";
import GameOver from "@/ui/components/GameOver";
import GameOptions from "@/ui/components/GameOptions";
import CodeDisplay from "@/ui/components/CodeDisplay";

enum Screen {
  MAIN_GAME,
  HISTORY,
  GAME_OVER,
}

const Game = (): JSX.Element => {
  const maxSize = 4;

  const [code, setCode] = React.useState<string[]>([]);
  const [gameId, setGameId] = React.useState<string | null>(null);
  const [shouldClear, setShouldClear] = React.useState<boolean>(false);
  const [showOptions, setShowOptions] = React.useState<boolean>(false);
  const [remainingTrials, setRemainingTrials] = React.useState<number>(10);
  const [currentScreen, setCurrentScreen] = React.useState<Screen>(Screen.GAME_OVER);
  const [codeRes, setCodeRes] = React.useState<Result>({ deadCount: 0, injuredCount: 0 });

  const gameManager = React.useMemo(() => {
    return gameId ? new GameManager(gameId) : null;
  }, [gameId]);

  const toggleOptions = () => setShowOptions(val => !val);
  const toggleGameOver = () => setCurrentScreen(Screen.GAME_OVER);

  React.useEffect(() => {
    if (gameManager) {
      const unsub = gameManager.addListener((state) => {
        switch (state.type) {
          case "TIME_CHANGE":
            console.log(state.data.period as number);
            break;
          case "TIMER_PAUSED":
            console.log("Timer paused");
            break;
          case "TIMER_RESUME":
            console.log("Timer resume");
            break;
          case "COMPLETED":
            toggleGameOver();
            break;
          case "STARTED":
            console.log("Stated");
            break;
        }
      });

      return unsub;
    }
  }, [gameManager]);

  React.useEffect(() => {
    setGameId(nanoid(10));
  }, []);

  const onClear = () => setCode([]);
  const onKeyPress = (key: string | "enter") => {
    if (gameManager) {
      if (key === "enter") {
        const res = gameManager.addTrial(code.join(""));
        setCodeRes(res);
        setShouldClear(true);
        setRemainingTrials(val => val - 1);
        return;
      }

      if (shouldClear) {
        setCode([]);
        setShouldClear(false);
      }
      setCode((prevCode) => [...prevCode, key]);
    }
  }

  const toggleScreens = () => {
    if (currentScreen == Screen.MAIN_GAME) {
      setCurrentScreen(Screen.HISTORY);
    } else {
      setCurrentScreen(Screen.MAIN_GAME);
    }
  }

  return (
    <View style={{ flex: 1, width: "100%", padding: 24 }}>
      {showOptions && <GameOptions onClose={toggleOptions} />}

      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Pressable onPress={toggleOptions}>
            <SimpleLineIcons name="menu" size={32} color="white" />
          </Pressable>

          <View style={{ flexDirection: "row", gap: 20, width: "100%", flex: 1, alignItems: "center" }}>
            <Text style={styles.headingText}>
              {currentScreen == Screen.HISTORY && "History"}
              {currentScreen == Screen.MAIN_GAME && "Genius"}
              {currentScreen == Screen.GAME_OVER && "Game Over"}
            </Text>
          </View>

          <Pressable onPress={toggleScreens}>
            <Text style={[styles.headingText, { width: 40, textAlign: "right" }]}>{remainingTrials}</Text>
          </Pressable>
        </View>

        <View style={styles.mainContainer}>
          {currentScreen == Screen.MAIN_GAME && (
            <>
              <CodeDisplay code={code} codeRes={codeRes} maxSize={maxSize} onClear={onClear} />
              <Keypad onKeyPress={onKeyPress} />
            </>
          )}
          {currentScreen == Screen.HISTORY && (
            <History />
          )}
          {currentScreen == Screen.GAME_OVER && (
            <GameOver />
          )}
        </View>
      </View>
    </View>
  );
};


export default Game;


const styles = StyleSheet.create({
  container: {
    gap: 40,
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
  },
  headingText: {
    fontSize: 24,
    width: "100%",
    color: "white",
    textAlign: "center",
    fontFamily: "TitilliumWeb-Regular",
  },
  mainContainer: {
    flex: 1,
    gap: 24,
    width: "100%",
    height: "50%",
    position: "relative",
  },
  headingContainer: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});