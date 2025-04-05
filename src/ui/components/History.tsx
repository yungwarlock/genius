import React from "react";

import EvilIcons from "@expo/vector-icons/EvilIcons";
import { View, Text, StyleSheet, ScrollView, Dimensions, Pressable } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";


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
  {
    id: 9,
    name: "John Doe",
    score: 20,
  },
  {
    id: 10,
    name: "Jane Doe",
    score: 10,
  },
  {
    id: 11,
    name: "John Smith",
    score: 0,
  },
  {
    id: 12,
    name: "Jane Smith",
    score: -10,
  },
  {
    id: 13,
    name: "John Doe",
    score: -20,
  },
  {
    id: 14,
    name: "Jane Doe",
    score: -30,
  },
];

interface HistoryProps {
  onClose: () => void;
}

const History = ({ onClose }: HistoryProps) => {
  return (
    <View style={styles.blurBackground}>
      <View style={styles.closeBtn}>
        <Pressable onPress={onClose} style={{ padding: 10 }}>
          <EvilIcons name="close" size={44} color="white" />
        </Pressable>
        <Text style={styles.title}>History</Text>
      </View>
      <View style={styles.contentWrapper}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Name</Text>
          <Text style={styles.headingText}>Score</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={{ width: "100%" }}>
          {scores.map((score, index) => (
            <Animated.View
              key={score.id}
              entering={FadeInDown.delay(index * 50)}
              style={[styles.cell, score.id % 2 === 0 && styles.cellAlt]}
            >
              <Text style={[styles.cellText, styles.nameColumn]}>{score.name}</Text>
              <Text style={[styles.cellText, styles.scoreColumn]}>{score.score}</Text>
            </Animated.View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default History;

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  closeBtn: {
    height: 90,
    padding: 15,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  container: {
    gap: 8,
    zIndex: 1,
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
  },
  headingText: {
    color: "white",
    fontSize: 24,
    fontFamily: "TitilliumWeb-Regular",
  },
  blurBackground: {
    top: 0,
    gap: 8,
    left: 0,
    zIndex: 20,
    width: "100%",
    height: "100%",
    position: "absolute",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
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
    width: "100%",
    height: "100%",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  contentWrapper: {
    width: width * 0.9,
    maxWidth: 500,
    height: "80%",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "rgba(255, 255, 255, 0.3)",
    backgroundColor: "rgba(8, 9, 15, 0.95)",
    overflow: "hidden",
    zIndex: 50,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  scrollView: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    color: "white",
    width: "100%",
    textAlign: "center",
    marginVertical: 20,
    fontFamily: "TitilliumWeb-Bold",
  },
  headingContainer: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    justifyContent: "space-between",
  },
  tableHeader: {
    padding: 15,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderBottomColor: "rgba(255, 255, 255, 0.3)",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  rankColumn: {
    width: "20%",
    textAlign: "center",
  },
  nameColumn: {
    width: "50%",
    textAlign: "left",
  },
  scoreColumn: {
    width: "30%",
    textAlign: "right",
  },
  tableHeadingText: {
    fontSize: 20,
    color: "white",
    fontFamily: "TitilliumWeb-Bold",
  },
  cell: {
    padding: 15,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
  },
  cellAlt: {
    backgroundColor: "rgba(255, 255, 255, 0.02)",
  },
  cellText: {
    fontSize: 16,
    color: "white",
    fontFamily: "TitilliumWeb-Regular",
  },
  button: {
    padding: 16,
    width: "100%",
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "white",
  },
});