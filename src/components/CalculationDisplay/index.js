import React from "react";
import { StyleSheet, View, Text } from "react-native";
import PropTypes from "prop-types";
import { ThemeContext } from "contexts/themeContext";

const CalculationDisplay = ({ value }) => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={[styles.text, { color: theme.foreground }]}>{value}</Text>
      </View>
    )}
  </ThemeContext.Consumer>
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
    fontSize: 18,
    fontWeight: "700",
  },
});

export default CalculationDisplay;
