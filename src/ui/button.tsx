import React from "react";
import { Button as WixButton, type ButtonProps } from "react-native-ui-lib";

import { useAppearanceStore } from "../store/appearanceStore.ts";

export const Button: React.FC<ButtonProps> = ({ backgroundColor, ...props }) => {
  const { colors } = useAppearanceStore();

  return (
    <WixButton
      backgroundColor={backgroundColor ?? colors.black}
      {...props}
    />
  );
};
