import React from "react";

import { View, Text, StyleSheet } from "react-native";


const GameOver = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Game Over</Text>
        <Text style={styles.subHeadingText}>You"re a Genius!</Text>
      </View>

      <View style={{
        gap: 56,
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
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
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
    lineHeight: 16,
    fontFamily: "TitilliumWeb-Regular",
  },
  factContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  factTitleText: {
    fontSize: 28,
    color: "#fff",
    lineHeight: 24,
    fontFamily: "TitilliumWeb-Regular",
  },
  factValueText: {
    fontSize: 42,
    color: "#fff",
    fontFamily: "TitilliumWeb-SemiBold",
  },
  options: {
    fontSize: 30,
    color: "white",
    fontFamily: "TitilliumWeb-Regular",
  }
});