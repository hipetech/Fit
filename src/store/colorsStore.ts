import { Colors } from "../types/colors";
import { create } from "zustand/esm";
import { lightColors } from "../styles/lightColors";

interface ColorsState {
  colors: Colors;
  setColors: (colors: Colors) => void;
}


export const useColorsStore = create<ColorsState>((setState) => ({
  colors: lightColors,
  setColors: (colors: Colors) => setState(() => ({ colors: colors }))
}));
