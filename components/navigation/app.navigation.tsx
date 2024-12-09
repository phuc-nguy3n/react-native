import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../review/home";
import DetailsScreen from "../review/details";
import AboutScreen from "../review/about";
import "../../gesture-handler";
import AppHeader from "./app.header";

const HomeLayout = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      // screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Trang chủ",
          header: () => <AppHeader />,
        }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: "Đánh giá" }}
      />
    </Stack.Navigator>
  );
};

const AppNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={HomeLayout}
        options={{ title: "Trang chủ", header: () => <></> }}
      />
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: "Thông tin",
          header: () => <AppHeader />,
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppNavigation;
