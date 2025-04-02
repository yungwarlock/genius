import React from "react";

import { Text, StyleSheet, Pressable } from "react-native";

interface CodeDisplayProps {
  code: string[];
  maxSize: number;
  onClear: () => void;
 }

const CodeDisplay = ({ code, onClear, maxSize }: CodeDisplayProps): JSX.Element => {
  const formattedValue = React.useMemo(() => {
    const newCode = [...code, ...Array.from({ length: maxSize - code.length }).map(() => "_")]

    return newCode
      .slice(0, maxSize)
      .join(" ");
  }, [code]);

  return (
    <Pressable onPress={onClear} style={styles.display}>
      <Text style={styles.text}>{formattedValue}</Text>
      <Text style={styles.resultsText}>1 Dead, 3 Injured</Text>
    </Pressable>
  );
};


export default CodeDisplay;


const styles = StyleSheet.create({
  text: {
    fontSize: 56,
    color: "white",
    fontFamily: "TitilliumWeb-SemiBold",
  },
  resultsText: {
    fontSize: 22,
    marginTop: 4,
    color: "white",
    fontFamily: "TitilliumWeb-Regular",
  },
  display: {
    height: "33%",
    borderWidth: 3,
    borderRadius: 12,
    alignItems: "center",
    borderColor: "white",
    justifyContent: "center",
  },
});