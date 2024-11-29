import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [students, setStudents] = useState([
    {
      id: 0,
      name: "Nguyen",
      age: 23,
    },
    {
      id: 1,
      name: "Hong",
      age: 23,
    },
    {
      id: 2,
      name: "Phuc",
      age: 23,
    },
    {
      id: 3,
      name: "VIP",
      age: 23,
    },
    {
      id: 4,
      name: "VIP",
      age: 23,
    },
    {
      id: 5,
      name: "VIP",
      age: 23,
    },
    {
      id: 6,
      name: "VIP",
      age: 23,
    },
    {
      id: 7,
      name: "VIP",
      age: 23,
    },
    {
      id: 8,
      name: "VIP",
      age: 23,
    },
  ]);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 60 }}>Hello world</Text>
      <FlatList
        data={students}
        keyExtractor={(item) => item.id + ""}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                padding: 30,
                backgroundColor: "pink",
                marginBottom: 30,
              }}
            >
              <Text>{item.name}</Text>
            </View>
          );
        }}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
