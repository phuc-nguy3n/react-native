import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { OPENSANT } from "../../utils/const";
import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  review: {
    fontSize: 30,
    fontFamily: OPENSANT,
  },
});

function DetailsScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.review}>Details screen Google</Text>

      <Button onPress={() => navigation.goBack()}>Go back</Button>
    </View>
  );
}

export default DetailsScreen;
