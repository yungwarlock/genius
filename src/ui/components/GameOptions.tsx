import React from "react";

import { useRouter } from "expo-router";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { View, Pressable, Text, StyleSheet } from "react-native";

import { useGameSound } from "@/services/sound";


interface GameOptionsProps {
  onClose: () => void;
}

const GameOptions = ({ onClose }: GameOptionsProps): JSX.Element => {
  const router = useRouter();

  const { isPlaying, toggleSound } = useGameSound();

  return (
    <View style={styles.container}>
      <Pressable style={styles.closeBtn} onPress={onClose}>
        <EvilIcons name="close" size={44} color="white" />
      </Pressable>
      <Pressable onPress={() => router.push("/instructions")}>
        <Text style={styles.options}>
          Instructions
        </Text>
      </Pressable>
      <Pressable onPress={toggleSound}>
        <Text style={styles.options}>
          Sound {isPlaying ? "On" : "Off"}
        </Text>
      </Pressable>
      <Pressable onPress={() => router.push("/")}>
        <Text style={styles.options}>
          Home
        </Text>
      </Pressable>
    </View>
  );
};


export default GameOptions;


const styles = StyleSheet.create({
  closeBtn: {
    top: 30,
    left: 20,
    zIndex: 10,
    position: "absolute",
  },
  container: {
    top: 0,
    gap: 8,
    left: 0,
    zIndex: 20,
    width: "100%",
    height: "100%",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  options: {
    fontSize: 30,
    color: "white",
    fontFamily: "TitilliumWeb-Regular",
  }
});