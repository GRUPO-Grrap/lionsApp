import { Input, Text } from "@rneui/base";
import { Image, StyleSheet, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { StatusBar } from "expo-status-bar";
import Card from "../../components/card";
import LineSeparator from "../../components/lineSeparator";

export default function HomeScreen() {
  return (
    <>
      <StatusBar hidden />
      <View className="flex-1 h-screen w-screen">
        <Card />
        <LineSeparator />
        <View className="flex-1">
          <Text>A</Text>
        </View>
      </View>
    </>
  );
}
