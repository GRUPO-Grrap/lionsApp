import { View, StyleSheet, Image } from "react-native";
import ButtonForm from "../../components/button";
import { CheckBox, Input } from "@rneui/base";
import { useState } from "react";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sectionImage}>
        <Image
          style={styles.image}
          source={require("../../assets/meninoComOculos.png")}
        />
      </View>
      <View style={styles.form}>
        <View style={styles.sectionForm}>
          <Input
            placeholder="seuemail@example.com"
            leftIcon={{ type: "ionicon", name: "mail-outline" }}
          />
          <Input
            placeholder="Sua senha"
            leftIcon={{ type: "ionicon", name: "lock-closed-outline" }}
            rightIcon={{ type: "ionicon", name: "eye-off-outline" }}
            secureTextEntry={true}
          />
        </View>

        <ButtonForm name={"Enviar"} backgroundTheme={"primary"} />
      </View>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    position: "absolute",
    top: 260,
    backgroundColor: "#fff",
    height: "75%",
    justifyContent: "center",
    width: "100%",
    borderTopLeftRadius: 56,
    borderTopRightRadius: 56,
  },
  sectionForm: {
    marginLeft: 12,
    marginRigth: 12,
    justifyContent: "flex-end",
  },
  sectionImage: {
    justifyContent: "flex-start",
    width: "100%",
  },
  image: {
    justifyContent: "flex-start",
    width: "100%",
  },
});
