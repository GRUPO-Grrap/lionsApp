import { Tabs } from "expo-router";
import { ScreenValues, ScreenView } from "../../@types/files";
import { Feather } from "@expo/vector-icons";

export default function layApp() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name={ScreenView[ScreenValues.HOME].id}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name={ScreenView[ScreenValues.HISTORY].id}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="users" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name={ScreenView[ScreenValues.USERS].id}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="user-plus" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
