import React from "react";

import { Link } from "expo-router";
import { Text, StyleSheet, View, Pressable } from "react-native";

import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

import { useGameSound } from "@/services/GameSound";


export default function Index() {
  const { isPlaying, toggleSound } = useGameSound();

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Pressable onPress={toggleSound} style={styles.volumeButtonContainer}>
          {isPlaying ? (
            <SimpleLineIcons name="volume-2" size={40} color="white" />
          ) : (
            <SimpleLineIcons name="volume-off" size={40} color="white" />
          )}
        </Pressable>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.headingText}>Genius</Text>
        <View style={{ gap: 6 }}>
          <Link href="/game">
            <Text style={styles.empText}>Start</Text>
          </Link>
          <Link href="/instructions">
            <Text style={styles.text}>Instructions</Text>
          </Link>
          <Link href="/high-scores">
            <Text style={styles.text}>High Scores</Text>
          </Link>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  topContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  bottomContainer: {
    gap: 24,
    width: "100%",
    height: "50%",
    justifyContent: "center",
  },
  volumeButtonContainer: {
    flex: 1,
    flexDirection: "row-reverse",
  },
  headingText: {
    fontSize: 48,
    color: "#fff",
    fontFamily: "TitilliumWeb-Bold",
  },
  empText: {
    fontSize: 24,
    color: "#fff",
    fontFamily: "TitilliumWeb-Regular",
  },
  text: {
    fontSize: 22,
    color: "#B5B5B5",
    fontFamily: "TitilliumWeb-Regular",
  },
});