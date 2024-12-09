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
import { createDrawerNavigator } from "@react-navigation/drawer";
import "./gesture-handler";

SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

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
      {/* <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Trang chủ" }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: "Đánh giá" }}
        />
      </Stack.Navigator> */}
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
