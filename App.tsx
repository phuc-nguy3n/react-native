import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [alert, setAlert] = useState("Phúc có đẹp trai không ?");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{alert}</Text>
      <Button
        title="Nhấn để biết"
        onPress={() => setAlert("Đúng vậy, Phúc rất đẹp trai")}
        color="blue" // Tùy chỉnh màu sắc nút
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "red",
  },
});
