import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default ({ value }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 15,
  },
  text: {
    color: "black",
    fontSize: 18,
    fontWeight: "600",
  },
});
