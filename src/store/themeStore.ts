import { Theme } from "../types/Theme";
import { create } from "zustand";



interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeState>((setState) => ({
  theme: "light",
  setTheme: (theme: Theme) => setState(() => ({ theme: theme }))
}));
