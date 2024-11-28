import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [alert, setAlert] = useState("");
  const [nameInput, setNameInput] = useState<string>("");
  const [ageInput, setAgeInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.spacing}>
        <Text style={styles.text}>Bạn hãy nhập họ tên</Text>
        <TextInput
          autoCapitalize={"words"}
          style={styles.input}
          value={nameInput}
          onChangeText={(text) => setNameInput(text)}
        />
      </View>

      <View style={styles.spacing}>
        <Text style={styles.text}>Bạn hãy nhập tuổi</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          value={ageInput}
          onChangeText={(text) => {
            const numericValue = text.replace(/[^0-9]/g, ""); // Loại bỏ ký tự không phải số
            if (
              numericValue === "" ||
              (Number(numericValue) >= 1 && Number(numericValue) <= 200)
            ) {
              setAgeInput(numericValue);
            }
          }}
        />
      </View>

      <View style={styles.spacing}>
        <Text style={styles.text}>Mô tả bản thân</Text>
        <TextInput
          multiline
          style={styles.textArea}
          value={descriptionInput}
          onChangeText={(text) => setDescriptionInput(text)}
        />
      </View>

      <View style={styles.wrapped}>
        <Button
          title="Gửi đi"
          onPress={() => {
            if (nameInput && ageInput) {
              setAlert(
                "Họ tên: " +
                  nameInput +
                  " - " +
                  "Tuổi: " +
                  ageInput +
                  " - " +
                  "Mô tả: " +
                  descriptionInput
              );
              setNameInput("");
              setAgeInput("");
              setDescriptionInput("");
            }
          }}
          color="blue"
          disabled={!nameInput || !ageInput || !descriptionInput}
        />

        <Button
          title="Làm mới"
          onPress={() => {
            if (alert) {
              setNameInput("");
              setAgeInput("");
              setAlert("");
              setDescriptionInput("");
            }
          }}
          color="blue"
          disabled={alert.trim() === ""}
        />
      </View>

      <View>
        <Text style={styles.text}>{alert}</Text>
      </View>

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
  spacing: {
    marginBottom: 20,
  },
  text: {
    color: "gray",
    marginBottom: 5,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#000",
    width: 200,
    borderRadius: 10,
  },
  textArea: {
    padding: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#000",
    width: 200,
    borderRadius: 10,
    height: 100,
  },
  wrapped: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
  },
});
