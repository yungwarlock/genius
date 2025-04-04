import React from "react";

import { useRouter } from "expo-router";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { View, Text, StyleSheet, Pressable } from "react-native";


const scores = [
  {
    id: 1,
    name: "John Doe",
    score: 100,
  },
  {
    id: 2,
    name: "Jane Doe",
    score: 90,
  },
  {
    id: 3,
    name: "John Smith",
    score: 80,
  },
  {
    id: 4,
    name: "Jane Smith",
    score: 70,
  },
  {
    id: 5,
    name: "John Doe",
    score: 60,
  },
  {
    id: 6,
    name: "Jane Doe",
    score: 50,
  },
  {
    id: 7,
    name: "John Smith",
    score: 40,
  },
  {
    id: 8,
    name: "Jane Smith",
    score: 30,
  },
]


const HighScores = (): JSX.Element => {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Pressable onPress={handleClose}>
          <EvilIcons name="close" size={32} color="white" />
        </Pressable>
        <Text style={styles.headingText}>High Scores</Text>
        <View style={{ width: 32, height: 32 }} />
      </View>

      <View style={styles.mainContainer}>
        <View style={styles.blurBackground} />
        <View style={styles.itemsContainer}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeadingText}>Rank</Text>
            <Text style={styles.tableHeadingText}>Name</Text>
            <Text style={styles.tableHeadingText}>Score</Text>
          </View>
          {scores.map((score) => (
            <View key={score.id} style={[styles.cell, score.id % 2 === 0 && styles.cellAlt]}>
              <Text style={styles.cellText}>{score.id}</Text>
              <Text style={styles.cellText}>{score.name}</Text>
              <Text style={styles.cellText}>{score.score}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};


export default HighScores;


const styles = StyleSheet.create({
  container: {
    gap: 48,
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
  blurBackground: {
    top: 0,
    left: 0,
    zIndex: 10,
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "rgba(62, 81, 255, 0.2)",
  },
  itemsContainer: {
    gap: 8,
    zIndex: 20,
    padding: 8,
    width: "100%",
    height: "100%",
    position: "absolute",
    alignItems: "center",
  },
  mainContainer: {
    flex: 1,
    gap: 24,
    width: "100%",
    height: "50%",
    borderWidth: 2,
    borderColor: "white",
    position: "relative",
    justifyContent: "center",
  },
  headingContainer: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 8,
  },
  tableHeadingText: {
    color: "white",
    fontSize: 24,
    fontFamily: "TitilliumWeb-Regular",
  },
  cell: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 8,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  cellAlt: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  cellText: {
    color: "white",
    fontSize: 17,
    fontFamily: "TitilliumWeb-Regular",
  },
  button: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    width: "100%",
    alignItems: "center",
  },
});