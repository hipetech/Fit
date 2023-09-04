import React, { FunctionComponent, useEffect, useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { SvgProps } from "react-native-svg";

import { useColorsStore } from "../store/colorsStore";

interface SmallIconButtonProps {
    Content: FunctionComponent<SvgProps>,
}

const SmallIconButton: React.FC<SmallIconButtonProps> = ({ Content }) => {
  const [fillColor, setFillColor] = useState<string>("");

  const {colors} = useColorsStore();

  useEffect(() => {
    setFillColor(colors.white);
  }, [colors.white]);

  return (
    <Pressable
      style={styles.button}
      onPressIn={() => setFillColor(colors.orange)}
      onPressOut={() => setFillColor(colors.white)}
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
