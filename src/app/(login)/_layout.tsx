import { Tabs } from "expo-router";
import { ScreenValues, ScreenView } from "../../@types/files";

export default function layApp() {
  return (
    <Tabs screenOptions={{ headerShown: false }} detachInactiveScreens>
      <Tabs.Screen
        name={ScreenView[ScreenValues.LOGIN].id}
        options={{
          title: ScreenView[ScreenValues.LOGIN].name,
          href: null,
        }}
      />
      <Tabs.Screen
        name={ScreenView[ScreenValues.REGISTER].id}
        options={{
          href: null,
          title: ScreenView[ScreenValues.REGISTER].name,
        }}
      />
    </Tabs>
  );
}
