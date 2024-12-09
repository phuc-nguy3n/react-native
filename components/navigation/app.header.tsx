import { StyleSheet, Text, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#ccc",
    paddingHorizontal: 5,
    paddingVertical: 10,
    alignItems: "center",
    paddingTop: 40,
  },
  headerText: {
    width: "100%",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "600",
  },
});

const AppHeader = () => {
  const navigation: any = useNavigation();

  return (
    <View style={styles.container}>
      <Entypo
        name="menu"
        size={24}
        color="black"
        onPress={() => {
          navigation.openDrawer();
        }}
      />
      <Text style={styles.headerText}>Header</Text>
    </View>
  );
};

export default AppHeader;
