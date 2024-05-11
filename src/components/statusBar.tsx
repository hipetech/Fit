import React from "react";
import { StatusBar as RNStatusBar } from "react-native";

import { useAppearanceStore } from "../store/appearanceStore.ts";

const StatusBar = () => {
  const { theme, colors } = useAppearanceStore();

  return (
    <RNStatusBar
      barStyle={theme === "dark" ? "light-content" : "dark-content"}
      backgroundColor={colors.black}
    />
  );
};

export default StatusBar;
