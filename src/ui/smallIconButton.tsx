import React, { type FunctionComponent, useEffect, useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import type { SvgProps } from "react-native-svg";

import { useAppearanceStore } from "../store/appearanceStore.ts";

interface SmallIconButtonProps {
  Content: FunctionComponent<SvgProps>;
  onPress: () => void;
}

const SmallIconButton: React.FC<SmallIconButtonProps> = ({ Content, onPress }) => {
  const [fillColor, setFillColor] = useState<string>("");

  const { colors } = useAppearanceStore();

  useEffect(() => {
    setFillColor(colors.white);
  }, [colors.white]);

  return (
    <Pressable
      style={styles.button}
      onPressIn={() => setFillColor(colors.orange)}
      onPressOut={() => setFillColor(colors.white)}
      onPress={onPress}
    >
      <Content fill={fillColor} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
  },
});

export default SmallIconButton;
