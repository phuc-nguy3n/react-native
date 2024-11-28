import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

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
  ]);

  return (
    <View style={styles.container}>
      {students.map((item) => (
        <Text>{item.name}</Text>
      ))}
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
