import type { ColorSchemeName } from "react-native";
import { create } from "zustand";

import { darkColors } from "../styles/darkColors.ts";
import { lightColors } from "../styles/lightColors.ts";
import type { Colors } from "../types/Colors.ts";
import type { Theme } from "../types/Theme";

type AppearanceState = {
  theme: Theme;
  colors: Colors;
  setupAppearance: (colorScheme: ColorSchemeName) => void;
};

export const useAppearanceStore = create<AppearanceState>((setState) => ({
  theme: "light",
  colors: lightColors,

  setupAppearance: (colorScheme = "light") => {
    switch (colorScheme) {
      case "dark":
        setState({ theme: "dark", colors: darkColors });
        return;
      case "light":
        setState({ theme: "light", colors: lightColors });
        return;
    }
  },
}));
