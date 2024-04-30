import React from "react";
import { Dimensions } from "react-native";
import type { DashProps } from "react-native-ui-lib";
import { Dash as WixDash } from "react-native-ui-lib";

import { useAppearanceStore } from "../store/appearanceStore.ts";

export const Dash: React.FC<Partial<DashProps>> = ({
  gap = 10,
  thickness = 1,
  length = Dimensions.get("window").width,
  ...props
}) => {
  const { colors } = useAppearanceStore();

  return (
    <WixDash
      gap={gap}
      thickness={thickness}
      length={length}
      color={colors.background}
      {...props}
    />
  );
};
