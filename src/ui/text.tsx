import React from "react";
import type { TextProps as TextElementProps } from "react-native";
import { Text as TextElement } from "react-native";

import { useAppearanceStore } from "../store/appearanceStore.ts";
import { FontWeight } from "../types/FontWeight.ts";

interface TextProps extends TextElementProps {
  children: string | undefined;
  fontSize?: number;
  fontWeight?: FontWeight;
  color?: string;
}

const Text: React.FC<TextProps> = ({
  children,
  fontSize = 14,
  fontWeight = FontWeight.REGULAR,
  color,
  style,
  ...props
}) => {
  const { colors } = useAppearanceStore();

  return (
    <TextElement
      style={{
        color: color ?? colors.white,
        fontSize: fontSize,
        fontWeight: fontWeight,
        fontFamily: "Roboto",
        ...(style as object),
      }}
      {...props}
    >
      {children}
    </TextElement>
  );
};

export default Text;
