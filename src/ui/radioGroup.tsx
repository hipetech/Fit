import React from "react";
import { StyleSheet } from "react-native";
import { RadioGroup as WixRadioGroup, type RadioGroupProps } from "react-native-ui-lib";

export const RadioGroup: React.FC<RadioGroupProps> = ({ style, ...props }) => {
  return (
    <WixRadioGroup
      style={[styles.container, style]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
});
