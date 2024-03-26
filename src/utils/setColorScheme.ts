import type { ColorSchemeName } from "react-native";

import { useColorsStore } from "../store/colorsStore.ts";
import { useThemeStore } from "../store/themeStore.ts";
import { darkColors } from "../styles/darkColors.ts";
import { lightColors } from "../styles/lightColors.ts";

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
