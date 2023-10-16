import React, { useState } from "react";
import { Text, View } from "react-native";
import { Avatar } from "@rneui/themed";

export default function Card() {
  return (
    <View className="h-32 w-full justify-center">
      <View className="justify-between mx-3 flex flex-row ">
        <View className="gap-2 font-bold">
          <Text className="text-3xl">Olá, Maria</Text>
          <Text className="text-base text-blue-800">
            Seja bem vinda ao Lions app
          </Text>
        </View>
        <View>
          <Avatar
            size={70}
            rounded
            icon={{ name: "pencil", type: "font-awesome" }}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ__pj-y1UL1BgWybrv-EUwGn7qyclIAJ-kQLt7HkoFcWOTIbHvU_jSXcP8tQyWCWRJxks&usqp=CAU",
            }}
            containerStyle={{ backgroundColor: "#9700b9" }}
          />
        </View>
      </View>
    </View>
  );
}
