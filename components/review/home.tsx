import React from "react";
import { Pressable, Text, View } from "react-native";
import { Button } from "@react-navigation/elements";

function HomeScreen({ navigation }: any) {
  return (
    <View>
      <Pressable
        style={({ pressed }) => ({
          marginTop: 10,
          padding: 10,
          backgroundColor: "blue",
          borderRadius: 2,
          opacity: pressed ? 0.5 : 1,
        })}
        onPress={() => navigation.navigate("Details")}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontWeight: "semibold",
          }}
        >
          Go to details
        </Text>
      </Pressable>
    </View>
  );
}

export default HomeScreen;
