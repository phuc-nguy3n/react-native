import React from "react";
import { Text, View } from "react-native";
import DetailsScreen from "./components/review/details";
import AboutScreen from "./components/review/about";
import HomeScreen from "./components/review/home";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { OPENSANT } from "./utils/const";

import { NavigationContainer } from "@react-navigation/native";

import AppNavigation from "./components/navigation/app.navigation";
import { SafeAreaView } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

function App() {
  const [loaded, error] = useFonts({
    [OPENSANT]: require("./assets/fonts/OpenSans-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);
  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
