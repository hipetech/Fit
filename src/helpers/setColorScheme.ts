import { ColorSchemeName } from "react-native";

import { useColorsStore } from "../store/colorsStore";
import { useThemeStore } from "../store/themeStore";
import { darkColors } from "../styles/darkColors";
import { lightColors } from "../styles/lightColors";

export function setColorScheme(theme: ColorSchemeName): void {
  switch (theme) {
  case "dark":
    useColorsStore.getState().setColors(darkColors);
    useThemeStore.getState().setTheme("dark");
    return;
  case "light":
    useColorsStore.getState().setColors(lightColors);
    useThemeStore.getState().setTheme("light");
    return;
  }
}
