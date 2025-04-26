import React from "react";

import { useRouter } from "expo-router";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { View, Pressable, Text, StyleSheet } from "react-native";

import { useGameSound } from "@/services/sound";


const Instructions = (): JSX.Element => {
  const router = useRouter();

  const { isPlaying, toggleSound } = useGameSound();

  const onClose = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.closeBtn} onPress={onClose}>
        <EvilIcons name="close" size={44} color="white" />
      </Pressable>
      <Pressable onPress={() => router.push("/instructions")}>
        <Text style={styles.options}>
          Account
        </Text>
      </Pressable>
      <Pressable onPress={toggleSound}>
        <Text style={styles.options}>
          Sound {isPlaying ? "On" : "Off"}
        </Text>
      </Pressable>
      <Pressable onPress={() => router.push("/")}>
        <Text style={styles.options}>
          Remove Ads
        </Text>
      </Pressable>
    </View>
  );
};


export default Instructions;


const styles = StyleSheet.create({
  closeBtn: {
    top: 30,
    left: 20,
    zIndex: 10,
    position: "absolute",
  },
  container: {
    gap: 8,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  options: {
    fontSize: 30,
    color: "white",
    fontFamily: "TitilliumWeb-Regular",
  }
});