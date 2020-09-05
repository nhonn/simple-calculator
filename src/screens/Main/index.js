import React from "react";
import { StyleSheet, View } from "react-native";
import Buttons from "./Buttons";
import Displays from "./Displays";

const Main = () => {
  const [calculation, setCalculation] = React.useState("0");
  const [result, setResult] = React.useState("0");

  const handleClick = (id) => alert(id);

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
