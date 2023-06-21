import React from "react";
import { StyleProp, TextProps, TextStyle } from "react-native";

import { FontWeight } from "../types/FontWeight";

import { font } from "../styles/font";


interface Text extends TextProps {
  fontWeight?: FontWeight
}

const Text: React.FC<Text> = ({children, fontWeight, style, ...rest}) => {
  const textStyle: StyleProp<TextStyle>  = {
    fontFamily: "Roboto",
    fontWeight: fontWeight ?? font.regular
  };

  return (
    <Text style={
      [textStyle, style]} {...rest}>
      {children}
    </Text>
  );
};

export default Text;
