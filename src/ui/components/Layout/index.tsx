import React from "react";
import { StyleSheet, ImageBackground, useWindowDimensions, View } from "react-native";


interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const { width } = useWindowDimensions();
  const isMobile = () => width <= 500;

  return (
    <View style={styles.container}>
      <View style={[styles.contentContainer, { width: isMobile() ? width : width / 2.3 }]}>
        {children}
      </View>
    </View>
  );
};

export default Layout;


const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1c1c83",
  },
  contentContainer: {
    height: "100%",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  }
});