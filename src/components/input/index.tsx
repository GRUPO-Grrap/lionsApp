import { Icon, Input } from "@rneui/base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface IProps {
  title: string;
}

const inputComponent = (props: IProps) => {
  const title = props.title;

  return (
    <View style={style.container}>
      <View style={style.section}>
        <View style={style.sectionTexto}>
          <Text style={style.titulo}>{title}</Text>
        </View>
        <Input
          style={style.input}
          placeholder="Nome do(a) professor(a)"
          leftIcon={
            <Icon
              style={style.icon}
              name="user"
              size={32}
              type="evilicon"
              color="#A0A0A0"
            />
          }
        />
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
    height: 160,
    flexDirection: "column",
    padding: 12,
  },
  sectionTexto: {
    width: "100%",
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    width: "100%",

    marginTop: 24,
  },
  icon: {
    paddingTop: 16,
  },
});
export default inputComponent;
