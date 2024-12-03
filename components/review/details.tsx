import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  review: {
    fontSize: 30,
    fontFamily: "OpenSans",
  },
});

function DetailsScreen() {
  return (
    <View>
      <Text style={styles.review}>Details screen Google</Text>
    </View>
  );
}

export default DetailsScreen;
