import React, { useCallback, useEffect, useState } from "react";
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
import { StatusBarStyle } from "react-native/Libraries/Components/StatusBar/StatusBar";

const App = () => {
  const { colors, setColors } = useColorsStore();

  const [savedTheme, setSavedTheme] = useState<string>("");

  const setColorsScheme = useCallback((theme: ColorSchemeName): void => {
    switch (theme) {
    case "dark":
      setColors(darkColors);
      setSavedTheme("light-content");
      return;
    case "light":
      setColors(lightColors);
      setSavedTheme("dark-content");
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
      <GestureHandlerRootView style={{flex: 1}}>
        <StatusBar barStyle={savedTheme as StatusBarStyle} backgroundColor={colors.black} />
        <Navigation />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
};


export default App;
