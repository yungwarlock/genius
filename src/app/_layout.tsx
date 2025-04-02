import React from "react";

import { Stack } from "expo-router";
import { ThemeProvider, DefaultTheme } from "@react-navigation/native";

import Layout from "@/ui/components/Layout";
import useTitilliumWeb from "@/assets/fonts/Titillium_Web";


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "transparent",
    background: 'transparent',
  },
};


export default function RootLayout() {
  const [fontsLoaded] = useTitilliumWeb();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider value={MyTheme}>
      <Layout>
        <Stack
          screenOptions={{
            animation: "fade",
            headerShown: false,
            statusBarTranslucent: true,
          }}>
          <Stack.Screen
            name="index"
            options={{
              title: "Home",
            }}
          />
          <Stack.Screen
            name="game"
            options={{
              title: "Game",
            }}
          />
          <Stack.Screen
            name="instructions"
            options={{
              title: "Game",
            }}
          />
        </Stack>
      </Layout>
    </ThemeProvider>
  );
};
