import React from "react";
import { StyleSheet, View } from "react-native";
import Buttons from "./Buttons";
import Displays from "./Displays";
import calc from "./calc";
import { ThemeContext } from "contexts/themeContext";

const Main = () => {
  const [calculation, setCalculation] = React.useState("");
  const [result, setResult] = React.useState("0");
  const [ans, setAns] = React.useState("0");
  const [isNew, setNew] = React.useState(true);
  const { theme } = React.useContext(ThemeContext);

  const handleClick = (btn) => {
    const res = calc(btn, calculation, result, ans, isNew);
    setCalculation(res.calcString);
    setResult(res.resString);
    setAns(res.ansString);
    setNew(res.isNewInput);
  };

  return (
    <View style={styles.container}>
      <View style={styles.displays}>
        <Displays calculation={calculation} result={result} />
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
