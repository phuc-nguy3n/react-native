import React from "react";
import { Text, View } from "react-native";
import DetailsScreen from "./components/review/details";
import AboutScreen from "./components/review/about";
import HomeScreen from "./components/review/home";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { OPENSANT } from "./utils/const";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

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
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
