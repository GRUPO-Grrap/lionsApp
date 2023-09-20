import React from "react";
import { View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
const InputSelect = () => {
  const placeholder = {
    label: "Selecione uma opção...",
    value: null,
    color: "#9EA0A4",
  };

  const items = [
    {
      label: "Opção 1",
      value: "opcao1",
    },
    {
      label: "Opção 2",
      value: "opcao2",
    },
    {
      label: "Opção 3",
      value: "opcao3",
    },
  ];

  return (
    <RNPickerSelect
      placeholder={placeholder}
      items={items}
      onValueChange={(value) => {
        // O valor selecionado estará disponível aqui
        console.log(value);
      }}
    />
  );
};

export default InputSelect;
