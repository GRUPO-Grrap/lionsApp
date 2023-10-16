import { Input, Text } from "@rneui/base";
import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import ButtonForm from "../../components/button";
import CheckboxComponent from "../../components/checkbox/Index";

import { router } from "expo-router";

const RegisterScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.sectionImage}>
          <Image
            style={styles.image}
            source={require("../../assets/meninaComOculos.png")}
          />
        </View>

        <View style={styles.sectionForm}>
          <View style={styles.form}>
            <Text style={styles.tituloLogin}>Cadastro</Text>
            <Input
              placeholder="Seu nome"
              leftIcon={{ type: "ionicon", name: "person-outline" }}
            />
            <Input
              placeholder="seuemail@example.com"
              leftIcon={{ type: "ionicon", name: "mail-outline" }}
            />

            <Input
              placeholder="Crie uma senha forte"
              leftIcon={{ type: "ionicon", name: "lock-closed-outline" }}
              rightIcon={{ type: "ionicon", name: "eye-off-outline" }}
              secureTextEntry={true}
            />
            <Input
              placeholder="Confirme sua senha"
              leftIcon={{ type: "ionicon", name: "lock-closed-outline" }}
              rightIcon={{ type: "ionicon", name: "eye-off-outline" }}
              secureTextEntry={true}
            />
            <Input
              placeholder="Insira sua chave privada"
              leftIcon={{ type: "ionicon", name: "shield-checkmark-outline" }}
            />
            <CheckboxComponent />
            <ButtonForm
              name={"Enviar"}
              backgroundTheme={"primary"}
              onPress={() => {}}
            />
            <View style={styles.textCadastrar}>
              <Text style={styles.textCadastrar}>
                Para cadastrar-se na comunidade é necessário sua chave de
                registro com o responsável.
              </Text>
              <TouchableOpacity>
                <Text style={styles.linkText}>SOLICITAR CHAVE</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.textCadastrar}>
              <TouchableOpacity onPress={() => router.replace("/(login)")}>
                <Text style={styles.linkText}>Ir para área de login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  keyboardAvoidingContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 0,
  },
  scrollContainer: {
    flexDirection: "column",
    paddingBottom: 0,
  },
  tituloLogin: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 40,
  },
  sectionForm: {
    width: "100%",

    marginTop: "-35%",

    justifyContent: "center",

    backgroundColor: "#fff",
    paddingHorizontal: 12,
    borderTopLeftRadius: 56,
    borderTopRightRadius: 56,
  },
  form: {
    width: "100%",

    marginTop: "20%",
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
    textAlign: "center",
    alignItems: "center",
  },
  linkText: {
    color: "#1C509C",
    marginBottom: 40,
    textDecorationLine: "underline",
  },
});
