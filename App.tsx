import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Keyboard,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FlexBox from "./components/flexbox";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

export default function App() {
  const [todoInput, setTodoInput] = useState("");
  const [totoList, setTodoList] = useState([
    {
      id: 0,
      name: "Ăn sáng",
    },
  ]);

  const [editingTodoId, setEditingTodoId] = useState<null | number>(null);
  const [editingInput, setEditingInput] = useState("");

  const deleteTodo = (id: any) => {
    setTodoList(totoList.filter((todo) => todo.id !== id));
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.header}>Todo App</Text>

          {/* Form */}
          <View style={styles.form}>
            <TextInput
              style={styles.todoInput}
              value={todoInput}
              onChangeText={(text) => setTodoInput(text)}
            />
            <View style={styles.todoButton}>
              <Button
                title="Add todo"
                onPress={() => {
                  if (todoInput) {
                    const todoID = totoList.length;

                    const todoTask = {
                      id: todoID,
                      name: todoInput.trim(),
                    };
                    setTodoList([...totoList, todoTask]);
                    setTodoInput("");
                  } else {
                    Alert.alert("Lỗi input todo", "Todo không được để trống", [
                      {
                        text: "Ok",
                      },
                      // {
                      //   text: "Hủy",
                      // },
                    ]);
                    return;
                  }
                }}
              />
            </View>
          </View>

          {/* List to do */}
          <View style={{ marginTop: 30, marginHorizontal: 15, flex: 8 }}>
            <Text style={{ marginBottom: 10 }}>List to do:</Text>
            <FlatList
              data={totoList}
              keyExtractor={(item, index) => index + ""}
              renderItem={({ item }) => {
                const isEditing = editingTodoId === item.id;

                return (
                  <View
                    style={{
                      padding: 30,
                      backgroundColor: "pink",
                      marginBottom: 10,
                    }}
                  >
                    {isEditing ? (
                      <TextInput
                        style={{
                          marginBottom: 10,
                          textAlign: "center",
                          fontSize: 18,
                          borderBottomWidth: 1,
                          borderColor: "gray",
                        }}
                        value={editingInput}
                        onChangeText={(text) => setEditingInput(text)}
                      />
                    ) : (
                      <Text
                        style={{
                          marginBottom: 10,
                          textAlign: "center",
                          fontSize: 18,
                          fontWeight: "bold",
                        }}
                      >
                        {item.name}
                      </Text>
                    )}

                    <Pressable
                      style={({ pressed }) => ({
                        marginTop: 10,
                        padding: 10,
                        backgroundColor: "orange",
                        borderRadius: 2,
                        opacity: pressed ? 0.5 : 1,
                      })}
                      onPress={() => {
                        if (isEditing) {
                          // Xử lý cập nhật
                          if (editingInput.trim()) {
                            setTodoList(
                              totoList.map((todo) =>
                                todo.id === item.id
                                  ? { ...todo, name: editingInput.trim() }
                                  : todo
                              )
                            );
                          }
                          // Kết thúc chỉnh sửa
                          setEditingTodoId(null);
                          setEditingInput("");
                        } else {
                          // Bắt đầu chỉnh sửa
                          setEditingTodoId(item.id);
                          setEditingInput(item.name);
                        }
                      }}
                    >
                      <Text style={{ textAlign: "center" }}>
                        {isEditing ? (
                          <Feather name="edit" size={24} color="black" />
                        ) : (
                          <AntDesign name="edit" size={24} color="black" />
                        )}
                      </Text>
                    </Pressable>

                    <Pressable
                      style={({ pressed }) => ({
                        marginTop: 10,
                        padding: 10,
                        backgroundColor: "red",
                        borderRadius: 2,
                        opacity: pressed ? 0.5 : 1,
                      })}
                      onPress={() => deleteTodo(item.id)}
                    >
                      <Text
                        style={{
                          textAlign: "center",
                          color: "white",
                          fontWeight: "semibold",
                        }}
                      >
                        <AntDesign name="delete" size={24} color="black" />
                      </Text>
                    </Pressable>
                  </View>
                );
              }}
            ></FlatList>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    flex: 1,
  },
  header: {
    backgroundColor: "orange",
    paddingHorizontal: 20,
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
    flex: 1,
  },
  form: {
    flex: 2,
  },
  todoInput: {
    borderBottomWidth: 1,
    borderColor: "green",
    padding: 5,
    marginHorizontal: 15,
    marginTop: 15,
  },

  todoButton: {
    marginTop: 5,
    marginHorizontal: 15,
  },
});
