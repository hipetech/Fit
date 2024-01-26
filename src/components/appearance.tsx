import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useLayoutEffect } from "react";
import { ColorSchemeName, Platform, StatusBar, useColorScheme } from "react-native";
import changeNavigationBarColor from "react-native-navigation-bar-color";

import { AsyncStorageValues } from "../asyncStorage.ts";
import { useColorsStore } from "../store/colorsStore";
import { useThemeStore } from "../store/themeStore";
import { setColorScheme } from "../utils/setColorScheme.ts";

const Appearance = () => {
  const { colors } = useColorsStore();
  const { theme } = useThemeStore();

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
    AsyncStorage.getItem(AsyncStorageValues.COLOR_THEME).then((savedTheme) => {
      if (savedTheme) setColorScheme(savedTheme as ColorSchemeName);
      else setColorScheme(colorTheme);
    });
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
