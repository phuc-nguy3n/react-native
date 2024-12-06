import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button } from "@react-navigation/elements";

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
  },
});

function HomeScreen({ navigation }: any) {
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
      <Text style={{ marginBottom: 5, marginTop: 5, fontSize: 30 }}>
        Review list:{" "}
      </Text>

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
    </View>
  );
}

export default HomeScreen;
