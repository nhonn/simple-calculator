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
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 15,
  },
  text: {
    color: "black",
    fontSize: 22,
    fontWeight: "600",
  },
});
