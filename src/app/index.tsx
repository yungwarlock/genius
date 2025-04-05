import React from "react";

import { Link } from "expo-router";
import { Text, StyleSheet, View } from "react-native";


export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Genius</Text>
      <View style={{ justifyContent: "center", alignItems: "center", gap: 6 }}>
        <Link href="/game">
          <Text style={styles.empText}>Play</Text>
        </Link>
        <Link href="/game">
          <Text style={styles.text}>Challenge</Text>
        </Link>
        <Link href="/instructions">
          <Text style={styles.text}>Instructions</Text>
        </Link>
        <Link href="/high-scores">
          <Text style={styles.text}>High Scores</Text>
        </Link>
        <Link href="/settings">
          <Text style={styles.text}>Settings</Text>
        </Link>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    width: "100%",
    height: "100%",
    paddingTop: 140,
    alignItems: "center",
    justifyContent: "flex-start",
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
    fontSize: 72,
    color: "#fff",
    fontFamily: "TitilliumWeb-Bold",
  },
  empText: {
    fontSize: 44,
    color: "#fff",
    fontFamily: "TitilliumWeb-Regular",
  },
  text: {
    fontSize: 32,
    color: "#B5B5B5",
    fontFamily: "TitilliumWeb-Regular",
  },
});