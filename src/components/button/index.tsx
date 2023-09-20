import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

interface IProps {
  name: String;
}

const ButtonForm = (props: IProps) => {
  const name = props.name;
  return (
    <View style={style.container}>
      <View style={style.areaButton}>
        <View style={style.button}>
          <Text style={style.textButton}>{name}</Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
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
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ADADAD",
    width: "100%",
    height: 40,
    borderRadius: 8,
  },
  textButton: {
    fontWeight: "bold",
    color: "#5F5F5F",
  },
});

export default ButtonForm;
