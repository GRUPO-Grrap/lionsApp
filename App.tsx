import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ButtonForm from "./src/components/button";

export default function App() {
  return (
    <View style={styles.container}>
      <ButtonForm name={"Enviar"} backgroundTheme={"primary"} />
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
    margin: 12,
    rowGap: 8,
  },
});
