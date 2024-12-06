import React from "react";
import { StyleSheet, Text, View } from "react-native";
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
  const navigation = useNavigation();
  const route: RouteProp<RootStackParamList, "review-details"> = useRoute();

  const { title, star } = route.params;
  return (
    <View>
      <Text style={styles.review}>Review details: {title}</Text>

      <Text style={styles.review}>Rating: {star}</Text>

      <Button onPress={() => navigation.goBack()}>Go back</Button>
    </View>
  );
}

export default DetailsScreen;
