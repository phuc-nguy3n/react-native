import React from "react";
import { Text, View } from "react-native";
import DetailsScreen from "./components/review/details";
import AboutScreen from "./components/review/about";
import HomeScreen from "./components/review/home";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

function App() {
  const [loaded, error] = useFonts({
    OpenSans: require("./assets/fonts/OpenSans-Regular.ttf"),
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
    <View>
      <HomeScreen />
      <AboutScreen />
      <DetailsScreen />
    </View>
  );
}

export default App;
