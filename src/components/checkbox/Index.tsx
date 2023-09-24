import React, { useState } from "react";
import { CheckBox } from "@rneui/themed";

type CheckboxComponentProps = {};

const CheckboxComponent: React.FunctionComponent<
  CheckboxComponentProps
> = () => {
  const [check1, setCheck1] = useState(false);

  return (
    <CheckBox
      center
      title="Mantenha-me conectado"
      checked={check1}
      onPress={() => setCheck1(!check1)}
    />
  );
};

export default CheckboxComponent;
