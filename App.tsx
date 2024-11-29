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
import { SafeAreaView } from "react-native-safe-area-context";

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
    <SafeAreaView>
      <View>
        <Text style={styles.header}>Todo App</Text>

        {/* Form */}
        <View>
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
                }
              }}
            />
          </View>
        </View>

        {/* List to do */}
        <View style={{ marginTop: 30, marginHorizontal: 15 }}>
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

                  <Button
                    title={isEditing ? "Cập nhật" : "Chỉnh sửa"}
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
                  />

                  <View style={{ marginTop: 10 }}>
                    <Button title="Xóa" onPress={() => deleteTodo(item.id)} />
                  </View>
                </View>
              );
            }}
          ></FlatList>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "orange",
    paddingHorizontal: 20,
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
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
