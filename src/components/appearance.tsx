import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import { ColorSchemeName, Platform, StatusBar, useColorScheme } from "react-native";
import changeNavigationBarColor from "react-native-navigation-bar-color";

import { Contants } from "../contants";
import { setColorScheme } from "../helpers/setColorScheme";
import { useColorsStore } from "../store/colorsStore";
import { useThemeStore } from "../store/themeStore";

const Appearance = () => {
  const { colors } = useColorsStore();
  const {theme} = useThemeStore();

  // set navigation color Android only
  useEffect(() => {
    if (Platform.OS === "android") {
      changeNavigationBarColor(colors.black);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  const colorTheme = useColorScheme();

  // get theme
  useEffect(() => {
    AsyncStorage.getItem(Contants.COLOR_THEME)
      .then(savedTheme => {
        if (savedTheme) setColorScheme(savedTheme as ColorSchemeName);
        else setColorScheme(colorTheme);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorTheme]);


  console.log("Appearance render");
  return (
    <StatusBar barStyle={theme === "dark" ? "light-content" : "dark-content" } backgroundColor={colors.black} />
  );
};

export default Appearance;
