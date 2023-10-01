import { StatusBar } from "expo-status-bar";
import React from "react";

import { SafeAreaView, StyleSheet } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <LoginScreen /> */}
      <StatusBar style="auto" />
    </SafeAreaView>
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
