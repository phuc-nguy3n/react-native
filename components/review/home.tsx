import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CreateModal from "./create.modal";
import AntDesign from "@expo/vector-icons/AntDesign";

interface IReview {
  id: number;
  title: string;
  star: number;
}

const styles = StyleSheet.create({
  reviewItem: {
    padding: 15,
    backgroundColor: "#ccc",
    margin: 15,
    marginVertical: 5,
  },
  addBtn: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: "#0099ff",
  },
});

function HomeScreen({ navigation }: any) {
  const [modalVisible, setModalVisible] = useState(true);

  const [reviews, setReviews] = useState<IReview[]>([
    {
      id: 0,
      title: "React Native",
      star: 5,
    },
    {
      id: 1,
      title: "Phuc Nguyen",
      star: 5,
    },
  ]);

  return (
    <View>
      <Text
        style={{
          marginBottom: 5,
          marginTop: 5,
          fontSize: 30,
          paddingHorizontal: 15,
        }}
      >
        Review list:{" "}
      </Text>

      <View
        style={{
          marginHorizontal: 15,
          marginBottom: 10,
        }}
      >
        <Pressable style={styles.addBtn} onPress={() => setModalVisible(true)}>
          <AntDesign name="pluscircle" size={30} color="white" />
        </Pressable>
      </View>

      <View>
        <FlatList
          data={reviews}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Details", item);
                }}
              >
                <View style={styles.reviewItem}>
                  <Text>{item.title}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <CreateModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}

export default HomeScreen;
