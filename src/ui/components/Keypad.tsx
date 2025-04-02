import React from "react";

import { View, Text, Pressable, StyleSheet } from "react-native";


interface KeypadProps {
  onKeyPress: (key: string | "enter") => void;
}

const Keypad = ({ onKeyPress }: KeypadProps) => {
  const handleKeyPress = (key: string) => {
    console.log(`Key pressed: ${key}`);
    if (key === "→") {
      onKeyPress("enter");
    } else {
      onKeyPress(key);
    }
  };
  return (
    <View style={styles.container}>
      <KeyRow>
        <Key text="1" onPress={() => handleKeyPress("1")} />
      </KeyRow>
      <KeyRow>
        <Key text="2" onPress={() => handleKeyPress("2")} />
        <Key text="3" onPress={() => handleKeyPress("3")} />
        <Key text="4" onPress={() => handleKeyPress("4")} />
      </KeyRow>
      <KeyRow>
        <Key text="5" onPress={() => handleKeyPress("5")} />
        <Key text="6" onPress={() => handleKeyPress("6")} />
        <Key text="7" onPress={() => handleKeyPress("7")} />
        <Key text="8" onPress={() => handleKeyPress("8")} />
      </KeyRow>
      <KeyRow>
        <Key text="9" onPress={() => handleKeyPress("9")} />
        <Key text="0" onPress={() => handleKeyPress("0")} />
        <Key text="→" onPress={() => handleKeyPress("→")} />
      </KeyRow>
    </View>
  );
};

const Key = ({ text, onPress }: { text: string, onPress?: () => void }) => {
  const [isPressed, setIsPressed] = React.useState(false);

  const handlePress = () => {
    setIsPressed(true);
    onPress?.();
    setTimeout(() => setIsPressed(false), 150);
  };

  return (
    <Pressable onPress={handlePress}>
      <View style={[styles.key, isPressed && { backgroundColor: "white" }]}>
        <Text style={[styles.keyText, isPressed && { color: "black" }]}>{text}</Text>
      </View>
    </Pressable>
  );
}
const KeyRow = ({ children }: { children: React.ReactNode }) => {
  return (
    <View style={{ flexDirection: "row", gap: 12 }}>
      {children}
    </View>
  );
}

export default Keypad;


const styles = StyleSheet.create({
  container: {
    gap: 12,
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  keyText: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
  },
  key: {
    width: 67,
    height: 67,
    borderWidth: 2,
    borderRadius: 6,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
  }
});