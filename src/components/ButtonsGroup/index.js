import React from "react";
import { StyleSheet, View } from "react-native";
import PropTypes from "prop-types";
import Button from "components/Button";
import IconButton from "components/IconButton";

const ButtonsGroup = ({ buttons }) => (
  <View style={styles.container}>
    {buttons.map((e) => (
      <View style={styles.item} key={e.label}>
        {e.label == "THEME" ? (
          <IconButton label={e.label} onClick={e.onClick} />
        ) : (
          <Button label={e.label} variant={e.variant} onClick={e.onClick} />
        )}
      </View>
    ))}
  </View>
);

ButtonsGroup.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      variant: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    })
  ),
};

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

export default ButtonsGroup;
