import React, { FunctionComponent, useCallback, useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { SvgProps } from "react-native-svg";

import { useColorsStore } from "../store/colorsStore";

interface SmallIconButtonProps {
    Content: FunctionComponent<SvgProps>,
}

const SmallIconButton: React.FC<SmallIconButtonProps> = ({ Content }) => {

  const {colors} = useColorsStore();
  const [fillColor, setFillColor] = useState<string>(colors.white);

  const toggleColor = useCallback((color: string) => setFillColor(color), []);


  return (
    <Pressable
      style={styles.button}
      onPressIn={() => toggleColor(colors.orange)}
      onPressOut={() => toggleColor(colors.white)}
      onPress={() => console.log("hello world")}
    >
      <Content fill={fillColor} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 100
  }
});

export default SmallIconButton;
