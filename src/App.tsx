import React, { useCallback, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./modules/navigation";
import { ColorSchemeName, StatusBar, useColorScheme } from "react-native";
import { darkColors } from "./styles/darkColors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Contants } from "./contants";
import { lightColors } from "./styles/lightColors";
import { useColorsStore } from "./store/colorsStore";

const App = () => {
  const { colors, setColors } = useColorsStore();

  const setColorsScheme = useCallback((theme: ColorSchemeName): void => {
    switch (theme) {
    case "dark":
      setColors(darkColors);
      return;
    case "light":
      setColors(lightColors);
      return;
    }
  }, [setColors]);

  const colorTheme = useColorScheme();
  // get theme
  useEffect(() => {
    AsyncStorage.getItem(Contants.COLOR_THEME)
      .then(savedTheme => {
        if (savedTheme) setColorsScheme(savedTheme as ColorSchemeName);
        else setColorsScheme(colorTheme);
      });
  }, [colorTheme, colors, setColorsScheme]);

  return (
    <NavigationContainer>
      <StatusBar barStyle={"light-content"} backgroundColor={darkColors.black} />
      <Navigation />
    </NavigationContainer>
  );
};


export default App;
