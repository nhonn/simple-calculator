import React from "react";
import { StyleSheet, View, Text } from "react-native";
import PropTypes from "prop-types";
import { ThemeContext } from "contexts/themeContext";

const ResultDisplay = ({ value }) => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={[styles.text, { color: theme.foreground }]}>{value}</Text>
      </View>
    )}
  </ThemeContext.Consumer>
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
    fontSize: 24,
    fontWeight: "900",
  },
});

export default ResultDisplay;
