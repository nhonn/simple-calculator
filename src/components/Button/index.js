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
    fontWeight: "600",
    fontSize: 15,
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
