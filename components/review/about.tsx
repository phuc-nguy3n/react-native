import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../utils/const";

const styles = StyleSheet.create({
  about: {
    fontSize: 30,
  },
});

function AboutScreen() {
  return (
    <View>
      <Text style={[styles.about, globalStyles.globalFont]}>
        About screen Google
      </Text>
    </View>
  );
}

export default AboutScreen;
