import React from "react";

import { router } from "expo-router";
import { View, Text, StyleSheet, Pressable } from "react-native";


const GameOver = (): JSX.Element => {
  const goHome = () => router.push("/");

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Complete!</Text>
        <Text style={styles.subHeadingText}>Code found</Text>
      </View>

      <View style={{
        gap: 90,
        width: "100%",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
      }}>
        <View style={styles.factContainer}>
          <Text style={styles.factTitleText}>Trials</Text>
          <Text style={styles.factValueText}>15</Text>
        </View>
        <View style={styles.factContainer}>
          <Text style={styles.factTitleText}>Time</Text>
          <Text style={styles.factValueText}>07:30</Text>
        </View>
      </View>

      <View style={styles.menu}>
        <Pressable onPress={goHome}>
          <Text style={styles.menuItemText}>Next Level</Text>
        </Pressable>
        <Pressable onPress={goHome}>
          <Text style={styles.menuItemText}>Try Again</Text>
        </Pressable>
        <Pressable onPress={goHome}>
          <Text style={styles.menuItemText}>Home</Text>
        </Pressable>
      </View>
    </View>
  );
};


export default GameOver;


const styles = StyleSheet.create({
  container: {
    gap: 40,
    zIndex: 1,
    width: "100%",
    height: "100%",
    borderRadius: 12,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  headingContainer: {
    gap: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  headingText: {
    fontSize: 48,
    color: "#fff",
    fontFamily: "TitilliumWeb-Bold",
  },
  subHeadingText: {
    fontSize: 24,
    color: "#fff",
    lineHeight: 28,
    fontFamily: "TitilliumWeb-Regular",
  },
  factContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  factTitleText: {
    fontSize: 28,
    color: "#fff",
    fontFamily: "TitilliumWeb-Regular",
  },
  factValueText: {
    fontSize: 42,
    color: "#fff",
    lineHeight: 52,
    fontFamily: "TitilliumWeb-SemiBold",
  },
  options: {
    fontSize: 30,
    color: "white",
    fontFamily: "TitilliumWeb-Regular",
  },
  menu: {
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  menuItemText: {
    fontSize: 24,
    color: "#fff",
    fontFamily: "TitilliumWeb-Regular",
  }
});