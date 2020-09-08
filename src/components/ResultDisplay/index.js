import React from "react";
import { StyleSheet, View, Text } from "react-native";
import PropTypes from "prop-types";

const ResultDisplay = ({ value }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{value}</Text>
  </View>
);

ResultDisplay.propTypes = {
  value: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 15,
  },
  text: {
    color: "black",
    fontSize: 24,
    fontWeight: "800",
  },
});

export default ResultDisplay;
