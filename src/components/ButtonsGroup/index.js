import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "_atoms/button";

export default () => (
  <View style={styles.container}>
    <Button label="hihi" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    background: "white",
  },
});
