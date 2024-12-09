import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { OPENSANT } from "../../utils/const";
import { Button } from "@react-navigation/elements";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../types/route";

const styles = StyleSheet.create({
  review: {
    fontSize: 30,
    fontFamily: OPENSANT,
    marginBottom: 10,
  },
});

function DetailsScreen() {
  const route: RouteProp<RootStackParamList, "review-details"> = useRoute();

  const { title, star } = route.params;

  const renderStars = () => {
    let stars = [];
    for (let i = 0; i < star; i++) {
      stars.push(
        <Image
          key={i} // Key phải duy nhất
          style={{ height: 50, width: 50 }}
          source={require("../../assets/images/star.png")}
        />
      );
    }
    return stars;
  };
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../../assets/images/react-native.png")}
    >
      <Text style={styles.review}>Review details: {title}</Text>

      <Text style={styles.review}>Rating: </Text>

      <View style={{ flexDirection: "row", gap: 5 }}>{renderStars()}</View>
    </ImageBackground>
  );
}

export default DetailsScreen;
