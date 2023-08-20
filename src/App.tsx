import React, { useCallback, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./modules/navigation";
import { ColorSchemeName, StatusBar, useColorScheme } from "react-native";
import { darkColors } from "./styles/darkColors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Contants } from "./contants";
import { lightColors } from "./styles/lightColors";
import { useColorsStore } from "./store/colorsStore";
import "./i18n";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useThemeStore } from "./store/themeStore";

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
  }, []);

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
