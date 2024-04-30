import React from "react";
import { StyleSheet } from "react-native";
import { RadioButton as WixRadioButton, type RadioButtonProps } from "react-native-ui-lib";

import useStyles from "../hooks/useStyles.ts";
import type { Colors } from "../types/Colors.ts";

export const RadioButton: React.FC<RadioButtonProps> = ({ color, labelStyle, ...props }) => {
  const { styles, colors } = useStyles(style);

  return (
    <WixRadioButton
      color={color ?? colors.orange}
      labelStyle={labelStyle ?? styles.label}
      {...props}
    />
  );
};

const style = (colors: Colors) =>
  StyleSheet.create({
    label: {
      color: colors.white,
      fontSize: 14,
      fontFamily: "Roboto",
    },
  });
