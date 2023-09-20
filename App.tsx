import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

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
