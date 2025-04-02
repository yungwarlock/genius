import React from "react";
import { StyleSheet, ImageBackground } from "react-native";


interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.container}
      source={require("@/assets/images/Home.png")}
    >
      {children}
    </ImageBackground>
  );
};


export default Layout;


const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});