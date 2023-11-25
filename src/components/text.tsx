import React from "react";
import { TextProps as TextElementProps } from "react-native";
import { Text as TextElement } from "react-native";

import { FontWeight } from "../types/FontWeight";

interface TextProps extends TextElementProps {
  children: string;
  fontSize?: number;
  fontWeight?: FontWeight;
}

const Text: React.FC<TextProps> = (
  {
    children,
    fontSize = 14,
    fontWeight = FontWeight.REGULAR,
    style,
    ...rest
  }
) => {
  return (
    <TextElement {...rest} style={{
      fontSize: fontSize,
      fontWeight: fontWeight,
      fontFamily: "Roboto",
      ...style as object
    }}>
      {children}
    </TextElement>);
};

export default Text;
