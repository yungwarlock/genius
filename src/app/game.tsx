import React from "react";

import { useRouter } from "expo-router";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { View, Text, StyleSheet, Pressable } from "react-native";

import Keypad from "@/ui/components/Keypad";
import GameOver from "@/ui/components/GameOver";
import HomeOptions from "@/ui/components/HomeOption";
import CodeDisplay from "@/ui/components/CodeDisplay";


const Game = (): JSX.Element => {
  const maxSize = 4;
  const router = useRouter();

  const [code, setCode] = React.useState<string[]>([]);
  const [showOptions, setShowOptions] = React.useState<boolean>(false);
  const [showGameOver, setShowGameOver] = React.useState<boolean>(false);

  const onClear = () => setCode([]);
  const onKeyPress = (key: string | "enter") => {
    if (key === "enter") {
      console.log("Enter pressed");
      return;
    }

    setCode((prevCode) => [...prevCode, key]);
  }

  const handleClose = () => router.back();

  return (
    <View style={{ flex: 1 }}>
      {showGameOver && <GameOver />}
      {showOptions && <HomeOptions />}
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Pressable onPress={handleClose}>
            <EvilIcons name="close" size={32} color="white" />
          </Pressable>
          <Text style={styles.headingText}>07:38</Text>
          <View style={{ width: 32, height: 32 }} />
        </View>

        <View style={styles.mainContainer}>
          <CodeDisplay code={code} maxSize={maxSize} onClear={onClear} />
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