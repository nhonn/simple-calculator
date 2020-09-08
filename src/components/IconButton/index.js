import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ThemeContext } from "contexts/themeContext";

const IconButton = ({ label, onClick }) => (
  <ThemeContext.Consumer>
    {({ theme, toggleTheme }) => (
      <TouchableOpacity
        onPress={label == "THEME" ? toggleTheme : onClick}
        style={styles.button}
      >
        <MaterialCommunityIcons
          name="theme-light-dark"
          size={24}
          color={theme.foreground}
        />
      </TouchableOpacity>
    )}
  </ThemeContext.Consumer>
);

IconButton.propTypes = {
  label: PropTypes.string.isRequired,
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
});

export default IconButton;
