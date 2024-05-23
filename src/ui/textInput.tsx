import React from "react";
import { useController, useFormContext } from "react-hook-form";
import { StyleSheet } from "react-native";
import { TextField, type TextFieldProps } from "react-native-ui-lib";

import useStyles from "../hooks/useStyles.ts";
import type { Colors } from "../types/Colors.ts";

type TextInputProps = TextFieldProps & {
  name: string;
  fontSize?: number;
};

export const TextInput: React.FC<TextInputProps> = ({
  name,
  floatingPlaceholder = true,
  color,
  labelColor,
  fontSize = 14,
  style: inputStyle,
  floatingPlaceholderStyle,
  fieldStyle,
  ...props
}) => {
  const { control } = useFormContext();

  const { styles, colors } = useStyles(style);

  const {
    field: { value, onChange, onBlur },
  } = useController({ name, control });

  const textStyle = {
    fontSize,
  };

  return (
    <TextField
      color={color || colors.white}
      labelColor={labelColor || colors.white}
      value={value}
      floatingPlaceholder={floatingPlaceholder}
      onChange={(event) => onChange(event.nativeEvent.text)}
      onBlur={onBlur}
      style={[textStyle, inputStyle]}
      floatingPlaceholderStyle={[textStyle, floatingPlaceholderStyle]}
      fieldStyle={[styles.fieldStyle, fieldStyle]}
      {...props}
    />
  );
};

const style = (colors: Colors) =>
  StyleSheet.create({
    fieldStyle: {
      paddingBottom: 4,
      borderBottomWidth: 2,
      borderBottomColor: colors.background,
    },
  });
