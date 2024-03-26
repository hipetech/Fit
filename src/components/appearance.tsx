import React, { useLayoutEffect } from "react";
import { Platform, StatusBar, useColorScheme } from "react-native";
import changeNavigationBarColor from "react-native-navigation-bar-color";

import { useAppearanceStore } from "../store/appearanceStore.ts";

const Appearance = () => {
  const { theme, colors, setupAppearance } = useAppearanceStore();

  // set navigation color Android only
  useLayoutEffect(() => {
    if (Platform.OS === "android") {
      changeNavigationBarColor(colors.black);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  const colorTheme = useColorScheme();

  // get theme
  useLayoutEffect(() => {
    setupAppearance(colorTheme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorTheme]);

  console.log("Appearance render");
  return (
    <StatusBar
      barStyle={theme === "dark" ? "light-content" : "dark-content"}
      backgroundColor={colors.black}
    />
  );
};

export default Appearance;
