import { create } from "zustand";

import type { Theme } from "../types/Theme";

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeState>((setState) => ({
  theme: "light",
  setTheme: (theme: Theme) => setState(() => ({ theme: theme })),
}));
