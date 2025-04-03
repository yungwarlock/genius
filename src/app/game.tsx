import React from "react";

import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { View, Text, StyleSheet, Pressable } from "react-native";

import { nanoid } from "nanoid";

import GameManager from "@/engine";
import { Result } from "@/engine/types";
import Keypad from "@/ui/components/Keypad";
import GameOver from "@/ui/components/GameOver";
import GameOptions from "@/ui/components/GameOptions";
import CodeDisplay from "@/ui/components/CodeDisplay";


const Game = (): JSX.Element => {
  const maxSize = 4;

  const [code, setCode] = React.useState<string[]>([]);
  const [gameId, setGameId] = React.useState<string | null>(null);
  const [shouldClear, setShouldClear] = React.useState<boolean>(false);
  const [showOptions, setShowOptions] = React.useState<boolean>(false);
  const [showGameOver, setShowGameOver] = React.useState<boolean>(false);
  const [codeRes, setCodeRes] = React.useState<Result>({ deadCount: 0, injuredCount: 0 });

  const gameManagerRef = React.useRef<GameManager | null>(null);
  
  const toggleOptions = () => setShowOptions(val => !val);
  const toggleGameOver = () => setShowGameOver(val => !val);

  React.useEffect(() => {
    if (gameId) {
      gameManagerRef.current = new GameManager(gameId);
    } else {
      gameManagerRef.current = null;
    }
  }, [gameId]);

  React.useEffect(() => {
    const gameManager = gameManagerRef.current;

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
  }, [gameManagerRef]);

  React.useEffect(() => {
    setGameId(nanoid());
  }, []);

  const onClear = () => setCode([]);
  const onKeyPress = (key: string | "enter") => {
    const gameManager = gameManagerRef.current;

    if (gameManager) {
      if (key === "enter") {
        const res = gameManager.addTrial(code.join(""));
        setCodeRes(res);
        setShouldClear(true);
        return;
      }

      if (shouldClear) {
        setCode([]);
        setShouldClear(false);
      }
      setCode((prevCode) => [...prevCode, key]);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      {showGameOver && <GameOver />}
      {showOptions && <GameOptions onClose={toggleOptions} />}

      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Pressable onPress={toggleOptions}>
            <SimpleLineIcons name="menu" size={32} color="white" />
          </Pressable>
          <Text style={styles.headingText}>07:38</Text>
          <View style={{ width: 32, height: 32 }} />
        </View>

        <View style={styles.mainContainer}>
          <CodeDisplay code={code} codeRes={codeRes} maxSize={maxSize} onClear={onClear} />
          <Keypad onKeyPress={onKeyPress} />
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
    padding: 24,
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
  },
  headingText: {
    color: "white",
    fontSize: 24,
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