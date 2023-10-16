import { Input, Text } from "@rneui/base";
import { Image, StyleSheet, View } from "react-native";
import ButtonForm from "../../components/button";
import CheckboxComponent from "../../components/checkbox/Index";
import * as Animatable from "react-native-animatable";
import { router } from "expo-router";
import { useEffect } from "react";

const LoginScreen = () => {
  // useEffect(()=>{
  //   if(usuario ta logado){
  //     router.replace("/(tabs)/home");
  //   }
  // },[aqui voce vai colocar a dependencia de usuario])
  const goToRegister = () => {
    router.replace("/(login)/register");
  };
  function onSubmit() {
    //fazer o tramite de submit aqui
    router.replace("/(tabs)/home");
  }

  return (
    <View style={styles.container}>
      <View style={styles.sectionImage}>
        <Image
          style={styles.image}
          source={require("../../assets/meninoComOculos.png")}
        />
      </View>
      <View style={styles.sectionForm}>
        <View style={styles.form}>
          <Text style={styles.tituloLogin}>Login</Text>
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
          <CheckboxComponent />

          <View style={styles.textCadastrar}>
            <Text>Quer fazer parte da nossa comunidade?</Text>
            <Text onPress={goToRegister} style={styles.linkCadastrar}>
              CADASTRE-SE
            </Text>
          </View>
          <ButtonForm
            name={"Enviar"}
            backgroundTheme={"primary"}
            onPress={() => onSubmit()}
          />
        </View>
      </View>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tituloLogin: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 40,
  },
  sectionForm: {
    width: "100%",
    height: "100%",
    marginTop: "60%",
    position: "absolute",
    justifyContent: "center",

    backgroundColor: "#fff",
    paddingHorizontal: 12,
    borderTopLeftRadius: 56,
    borderTopRightRadius: 56,
  },
  form: {
    width: "100%",
    height: "100%",
    marginTop: "50%",
  },

  sectionImage: {
    justifyContent: "flex-start",
    width: "100%",
  },
  image: {
    justifyContent: "flex-start",
    width: "100%",
  },
  textCadastrar: {
    alignItems: "center",
  },
  linkCadastrar: {
    color: "#1C509C",
    textDecorationLine: "underline",
  },
});
