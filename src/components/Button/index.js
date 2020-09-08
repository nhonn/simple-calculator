import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";
import { ThemeContext } from "../../contexts/themeContext";

const Button = ({ label, variant, onClick }) => (
  <ThemeContext.Consumer>
    {(theme) => (
      <TouchableOpacity
        onPress={onClick}
        style={[styles.button, styles[variant]]}
      >
        <Text style={{ color: theme.foreground }}>{label}</Text>
      </TouchableOpacity>
    )}
  </ThemeContext.Consumer>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
  },
  normal: {
    backgroundColor: "white",
  },
  operator: {
    backgroundColor: "orange",
  },
  func: {
    backgroundColor: "yellow",
  },
  equal: {
    backgroundColor: "#34558b",
  },
});

export default Button;
