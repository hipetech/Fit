import "./i18n";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import React, { useCallback, useEffect } from "react";
import { ColorSchemeName, Platform, StatusBar, useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import changeNavigationBarColor from "react-native-navigation-bar-color";

import { Contants } from "./contants";
import Navigation from "./modules/navigation";
import { useColorsStore } from "./store/colorsStore";
import { useThemeStore } from "./store/themeStore";
import { darkColors } from "./styles/darkColors";
import { lightColors } from "./styles/lightColors";

const App = () => {
  const { colors, setColors } = useColorsStore();
  const {theme, setTheme} = useThemeStore();

  const setColorsScheme = useCallback((theme: ColorSchemeName): void => {
    switch (theme) {
    case "dark":
      setColors(darkColors);
      setTheme("dark");
      return;
    case "light":
      setColors(lightColors);
      setTheme("light");
      return;
    }
  }, [setColors, setTheme]);

  const colorTheme = useColorScheme();

  // get theme
  useEffect(() => {
    AsyncStorage.getItem(Contants.COLOR_THEME)
      .then(savedTheme => {
        if (savedTheme) setColorsScheme(savedTheme as ColorSchemeName);
        else setColorsScheme(colorTheme);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorTheme]);

  // set navigation color Android only
  useEffect(() => {
    if (Platform.OS === "android") {
      changeNavigationBarColor(colors.black);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{flex: 1}}>
        <StatusBar barStyle={theme === "dark" ? "light-content" : "dark-content" } backgroundColor={colors.black} />
        <Navigation />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
};


export default App;
