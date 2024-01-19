import { create } from "zustand";

import { lightColors } from "../styles/lightColors";
import { Colors } from "../types/Colors";

interface ColorsState {
  colors: Colors;
  setColors: (colors: Colors) => void;
}

export const useColorsStore = create<ColorsState>((setState) => ({
  colors: lightColors,
  setColors: (colors: Colors) => setState(() => ({ colors: colors })),
}));
