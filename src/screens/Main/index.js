import React from "react";
import { StyleSheet, View } from "react-native";
import Buttons from "./Buttons";
import Displays from "./Displays";
import { ThemeContext } from "contexts/themeContext";
import { DataContext } from "contexts/dataContext";

const Main = () => {
  const { theme } = React.useContext(ThemeContext);
  const { state, dispatch } = React.useContext(DataContext);

  const handleClick = (btn) => {
    switch (btn.type) {
      case "num":
        dispatch({ type: "NUMBER", payload: btn.value });
        break;
      case "operator":
        dispatch({ type: "OPERATOR", payload: btn.value });
        break;
      case "func":
        if (btn.value === "del") dispatch({ type: "DEL" });
        if (btn.value === "ans") dispatch({ type: "ANS" });
        if (btn.value === "clear") dispatch({ type: "CLEAR" });
        if (btn.value === "=") dispatch({ type: "EQUAL" });
        break;
      default:
        alert("errors");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.displays}>
        <Displays calculation={state.calculation} result={state.result} />
      </View>
      <View style={[styles.buttons, { backgroundColor: theme.cover }]}>
        <Buttons onClick={handleClick} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  displays: {
    height: "30%",
  },
  buttons: {
    height: "70%",
    padding: 10,
  },
});

export default Main;
