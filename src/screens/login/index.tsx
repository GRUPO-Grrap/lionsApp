import { Input, Text } from "@rneui/base";
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import ButtonForm from "../../components/button";
import CheckboxComponent from "../../components/checkbox/Index";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = ({ navigation }) => {
  const goToRegister = () => {
    navigation.navigate("Register");
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.sectionImage}>
          <Image
            style={styles.image}
            source={require("../../assets/meninoComOculos.png")}
          />
        </View>
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingContainer}
          behavior="padding"
        >
          <View style={styles.sectionForm}>
            <View style={styles.form}>
              <Text style={styles.tituloLogin}>Login</Text>
              <Input
                placeholder="seuemail@example.com"
                leftIcon={{ type: "ionicon", name: "mail-outline" }}
              />
              <Input
                placeholder="Insira sua senha "
                leftIcon={{ type: "ionicon", name: "lock-closed-outline" }}
                rightIcon={{ type: "ionicon", name: "eye-off-outline" }}
                secureTextEntry={true}
              />

              <CheckboxComponent />

              <ButtonForm name={"Enviar"} backgroundTheme={"primary"} />
              <View style={styles.textCadastrar}>
                <Text>Quer fazer parte da nossa comunidade?</Text>
                <Text onPress={goToRegister} style={styles.linkCadastrar}>
                  CADASTRE-SE
                </Text>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
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
    marginTop: "-60%",
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    borderTopLeftRadius: 56,
    borderTopRightRadius: 56,
  },
  form: {
    width: "100%",
    marginTop: "30%",
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
