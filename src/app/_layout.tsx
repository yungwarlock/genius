import React from "react";

import { Stack } from "expo-router";
import { ThemeProvider, DefaultTheme } from "@react-navigation/native";

import AdsProvider from "@/services/ads";
import Layout from "@/ui/components/Layout";
import GameSoundProvider from "@/services/sound";
import useTitilliumWeb from "@/assets/fonts/Titillium_Web";


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "transparent",
    background: "transparent",
  },
};

export default function RootLayout() {
  const [fontsLoaded] = useTitilliumWeb();

  if (!fontsLoaded) {
    return null;
  }

  const Providers = ({ children }: { children: React.ReactNode }) => (
    <GameSoundProvider>
      <AdsProvider>
        {children}
      </AdsProvider>
    </GameSoundProvider>
  );

  return (
    <ThemeProvider value={MyTheme}>
      <Providers>
        <Stack
          screenLayout={(props) => {
            return (
              <Layout>
                {props.children}
              </Layout>
            );
          }}
          screenOptions={{
            animation: "fade",
            headerShown: false,
            statusBarStyle: "light",
            statusBarTranslucent: true,
            statusBarBackgroundColor: "black",
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
          <Stack.Screen
            name="settings"
            options={{
              title: "Game",
            }}
          />
        </Stack>
      </Providers>
    </ThemeProvider>
  );
};
