import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

interface IProps {
  titulo: string;
}

const menuSuperior = (props: IProps) => {
  const titulo = props.titulo;
  return (
    <View style={style.container}>
      <View style={style.section}>
        <View style={style.icon}>
          <Feather name="arrow-left" size={24} color="#1C509C" />
        </View>
        <View style={style.sectionTexto}>
          <Text style={style.texto}>{titulo}</Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    display: "flex",
  },
  section: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
    height: 75,
    flexDirection: "row",
  },
  icon: {
    width: "auto",
    marginRight: 60,
  },
  sectionTexto: {
    alignItems: "center",
    width: "auto",
  },
  texto: {
    color: "#1C509C",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginRight: 40,
  },
});

export default menuSuperior;
