import { StatusBar } from "expo-status-bar";
import React from "react";

import { StyleSheet, Text, View } from "react-native";
import ButtonForm from "./src/components/button";
import CheckboxComponent from "./src/components/checkbox/Index";
import LoginScreen from "./src/screens/login";

export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F1F1F1",
    justifyContent: "flex-end",
    // margin: 12,
    // rowGap: 8,
  },
});
