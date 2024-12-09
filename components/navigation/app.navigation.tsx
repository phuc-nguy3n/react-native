import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../review/home";
import DetailsScreen from "../review/details";
import AboutScreen from "../review/about";
import "../../gesture-handler";

const HomeLayout = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Home">
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
    </Stack.Navigator>
  );
};

const AppNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={HomeLayout}
        options={{ title: "Trang chủ" }}
      />
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{ title: "Thông tin" }}
      />
    </Drawer.Navigator>
  );
};

export default AppNavigation;
