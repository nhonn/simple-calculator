import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";

const Layout = ({ displays, buttons }) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.displays}>{displays}</View>
    <View style={styles.buttons}>{buttons}</View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f0f0f0",
  },
  displays: {
    height: "30%",
  },
  buttons: {
    height: "70%",
  },
});

export default Layout;
