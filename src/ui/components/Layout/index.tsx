import React from "react";
import { StyleSheet, ImageBackground, useWindowDimensions, View } from "react-native";


interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const { width } = useWindowDimensions();
  const isMobile = () => width <= 500;

  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.container}
      source={require("@/assets/images/Home.png")}
    >
      <View style={[styles.contentContainer, { width: isMobile() ? width : width / 2.3 }]}>
        {children}
      </View>
    </ImageBackground>
  );
};

export default Layout;


const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    height: "100%",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  }
});