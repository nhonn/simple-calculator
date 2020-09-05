import React from "react";
import { StyleSheet, View } from "react-native";
import Buttons from "./Buttons";
import Displays from "./Displays";
import calc from "./calc";

const Main = () => {
  const [calculation, setCalculation] = React.useState("");
  const [result, setResult] = React.useState("0");
  const [ans, setAns] = React.useState("0");
  const [isNew, setNew] = React.useState(true);

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
      <View style={styles.buttons}>
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
    backgroundColor: "pink",
    height: "30%",
  },
  buttons: {
    backgroundColor: "turquoise",
    height: "70%",
    padding: 10,
  },
});

export default Main;
