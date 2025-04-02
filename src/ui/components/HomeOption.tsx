import React from "react";

import { View, Text, StyleSheet } from "react-native";


const HomeOptions = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.options}>
        Instructions
      </Text>
      <Text style={styles.options}>
        Sound Off
      </Text>
      <Text style={styles.options}>
        Home
      </Text>
    </View>
  );
};


export default HomeOptions;


const styles = StyleSheet.create({
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
  }
});