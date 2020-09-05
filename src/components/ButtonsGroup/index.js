import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "../Button";

export default ({ buttons }) => (
  <View style={styles.container}>
    {buttons.map((e) => (
      <View style={styles.item} key={e.label}>
        <Button label={e.label} variant={e.variant} onClick={e.onClick} />
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-end",
  },
  item: {
    width: "22%",
    margin: 5,
  },
});
