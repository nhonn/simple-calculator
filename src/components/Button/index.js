import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";

const Button = ({ label, variant, onClick }) => (
  <TouchableOpacity onPress={onClick} style={[styles.button, styles[variant]]}>
    <Text style={styles.text}>{label}</Text>
  </TouchableOpacity>
);

Button.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func,
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: "#000",
    fontWeight: "700",
    fontSize: "1.2rem",
  },
  normal: {
    backgroundColor: "white",
  },
  operator: {
    backgroundColor: "orange",
  },
  func: {
    backgroundColor: "green",
  },
  equal: {
    backgroundColor: "turquoise",
  },
});

export default Button;
