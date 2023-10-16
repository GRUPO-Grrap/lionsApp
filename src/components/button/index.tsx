import { Link } from "expo-router";
import React from "react";
import { GestureResponderEvent } from "react-native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface IProps {
  name: String;
  backgroundTheme: String;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
}

const ButtonForm = (props: IProps) => {
  const { name, backgroundTheme, onPress } = props;
  const selectedStyle =
    backgroundTheme === "primary" ? styles.primary : styles.secondary;

  return (
    <View style={styles.container}>
      <View style={styles.areaButton}>
        <TouchableOpacity
          style={[styles.button, selectedStyle]}
          onPress={onPress}
        >
          <Text style={selectedStyle}>{name}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  areaButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    alignContent: "center",
    textAlign: "center",
    width: "100%",
    height: 117,
    padding: 12,
  },
  // Estilização do botão
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 40,
    borderRadius: 8,
  },
  // Varição da cor do botão
  primary: {
    backgroundColor: "#1C509C",
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  secondary: {
    backgroundColor: "#ADADAD",
    color: "#5F5F5F",
    fontWeight: "bold",
  },
});

export default ButtonForm;
