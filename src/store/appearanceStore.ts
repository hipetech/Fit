import AsyncStorage from "@react-native-async-storage/async-storage";
import type { ColorSchemeName } from "react-native";
import { create } from "zustand";

import { AsyncStorageValues } from "../asyncStorage.ts";
import { darkColors } from "../styles/darkColors.ts";
import { lightColors } from "../styles/lightColors.ts";
import type { Colors } from "../types/Colors.ts";
import type { Theme } from "../types/Theme";

interface AppearanceState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  colors: Colors;
  setColors: (colors: Colors) => void;
  setupAppearance: (colorScheme: ColorSchemeName) => void;
}

export const useAppearanceStore = create<AppearanceState>((setState) => ({
  // TODO: Setup light theme colors
  theme: "dark",
  setTheme: (theme: Theme) => setState(() => ({ theme: theme })),

  colors: darkColors,
  setColors: (colors: Colors) => setState(() => ({ colors: colors })),

  setupAppearance: async (colorScheme = "light") => {
    AsyncStorage.getItem(AsyncStorageValues.COLOR_THEME).then((savedTheme) => {
      switch (savedTheme || colorScheme) {
        case "dark":
          setState({ theme: "dark", colors: darkColors });
          return;
        case "light":
          setState({ theme: "light", colors: lightColors });
          return;
      }
    });
  },
}));
