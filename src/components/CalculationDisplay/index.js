import React from "react";
import { StyleSheet, View, Text } from "react-native";
import PropTypes from "prop-types";

const CalculationDisplay = ({ value }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{value}</Text>
  </View>
);

CalculationDisplay.propTypes = {
  value: PropTypes.string.isRequired,
};

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

export default CalculationDisplay;
