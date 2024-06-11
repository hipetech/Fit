import React, { forwardRef, type LegacyRef } from "react";
import { useController, useFormContext } from "react-hook-form";
import { StyleSheet } from "react-native";
import { TextField, type TextFieldProps, type TextFieldRef } from "react-native-ui-lib";

import useStyles from "../hooks/useStyles.ts";
import type { Colors } from "../types/Colors.ts";

type TextInputProps = TextFieldProps & {
  name: string;
  fontSize?: number;
};

export const TextInput = forwardRef<TextFieldProps, TextInputProps>(
  (
    {
      name,
      floatingPlaceholder = true,
      color,
      labelColor,
      fontSize = 14,
      style: inputStyle,
      floatingPlaceholderStyle,
      fieldStyle,
      ...props
    },
    ref
  ) => {
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
        ref={ref as LegacyRef<TextFieldRef>}
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
  }
);

TextInput.displayName = "TextInput";

const style = (colors: Colors) =>
  StyleSheet.create({
    fieldStyle: {
      paddingBottom: 4,
      borderBottomWidth: 2,
      borderBottomColor: colors.background,
    },
  });
