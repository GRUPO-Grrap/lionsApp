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

const RegisterScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingContainer}
          behavior="padding"
        >
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
              <ButtonForm name={"Enviar"} backgroundTheme={"primary"} />
              <View style={styles.textCadastrar}>
                <Text>
                  Para cadastrar-se na comunidade é necessário sua chave de
                  registro com o responsável.
                </Text>
                <TouchableOpacity>
                  <Text style={styles.linkCadastrar}>SOLICITAR CHAVE</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.textCadastrar}>
                <TouchableOpacity>
                  <Text style={styles.linkCadastrar}>
                    Ir para área de login
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};
export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  keyboardAvoidingContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    flexDirection: "column",
  },
  tituloLogin: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 40,
  },
  sectionForm: {
    width: "100%",
    height: "60%",
    marginTop: "-10%",

    justifyContent: "center",

    backgroundColor: "#fff",
    paddingHorizontal: 12,
    borderTopLeftRadius: 56,
    borderTopRightRadius: 56,
  },
  form: {
    width: "100%",
    height: "100%",
    marginTop: "40%",
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
