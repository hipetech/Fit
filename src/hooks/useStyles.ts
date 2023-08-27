import { useMemo } from "react";
import { StyleSheet } from "react-native";

import { useColorsStore } from "../store/colorsStore";
import { Colors } from "../types/Colors";

interface Styles<T extends StyleSheet.NamedStyles<T>> {
  colors: Colors;
  styles: T;
}

export default function <T extends StyleSheet.NamedStyles<T>>(_: (colors: Colors) => T): Styles<T> {
  const { colors } = useColorsStore();

  return {
    colors: colors,
    styles: useMemo(() => _(colors), [colors, _])
  };
}
