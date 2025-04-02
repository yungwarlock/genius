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

  const gameManager = React.useMemo(() => new GameManager(nanoid()), []);

  const [code, setCode] = React.useState<string[]>([]);
  const [showOptions, setShowOptions] = React.useState<boolean>(false);
  const [showGameOver, setShowGameOver] = React.useState<boolean>(false);
  const [codeRes, setCodeRes] = React.useState<Result>({ deadCount: 0, injuredCount: 0 });

  const toggleOptions = () => setShowOptions(val => !val);
  // const toggleGameOver = () => setShowGameOver(val => !val);

  const onClear = () => setCode([]);
  const onKeyPress = (key: string | "enter") => {
    if (key === "enter") {
      const res = gameManager.addTrial(code.join(""));
      setCodeRes(res);
      return;
    }

    setCode((prevCode) => [...prevCode, key]);
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