import { View, StyleSheet } from "react-native";
import ButtonForm from "../../components/button";

const LoginScreen = () => {
  return (
    <View style={style.container}>
      <ButtonForm name={"Entrar"} />
    </View>
  );
};
export default LoginScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
  },
});
