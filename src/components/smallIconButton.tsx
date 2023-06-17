import React, { FunctionComponent, useCallback, useState } from "react";
import { StyleSheet, TouchableHighlight } from "react-native";
import { darkColors } from "../styles/darkColors";
import { SvgProps } from "react-native-svg";

interface SmallIconButtonProps {
    Content: FunctionComponent<SvgProps>,
}

const SmallIconButton: React.FC<SmallIconButtonProps> = ({ Content }) => {
  const [fillColor, setFillColor] = useState<string>(darkColors.white);

  const toggleColor = useCallback((color: string) => setFillColor(color), []);

  return (
    <TouchableHighlight
      style={styles.button}
      onPressIn={() => toggleColor(darkColors.orange)}
      onPressOut={() => toggleColor(darkColors.white)}
      onPress={() => console.log("hello world")}
    >
      <Content fill={fillColor} />
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 100
  }
});

export default SmallIconButton;
