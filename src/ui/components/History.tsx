import React from "react";

import { router } from "expo-router";

import EvilIcons from "@expo/vector-icons/EvilIcons";
import { View, Text, StyleSheet, Pressable } from "react-native";
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


const History = () => {
  const goHome = () => router.push("/");

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.subHeadingText}>Code</Text>
        <Text style={styles.subHeadingText}>Timestamp</Text>
      </View>

      <View style={styles.headingContainer}>
        <Text style={styles.subHeadingText}>Code</Text>
        <Text style={styles.subHeadingText}>Timestamp</Text>
      </View>
      <View style={styles.headingContainer}>
        <Text style={styles.subHeadingText}>Code</Text>
        <Text style={styles.subHeadingText}>Timestamp</Text>
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
  )
};

export default History;

const styles = StyleSheet.create({
  container: {
    gap: 40,
    width: "100%",
    height: "100%",
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  headingContainer: {
    width: "100%",
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    justifyContent: "space-between",
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