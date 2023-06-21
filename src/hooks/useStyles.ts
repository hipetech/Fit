import { StyleSheet } from "react-native";
import { Colors } from "../types/Colors";
import { useMemo } from "react";
import { useColorsStore } from "../store/colorsStore";

interface Styles<T extends StyleSheet.NamedStyles<T>> {
  colors: Colors;
  styles: T;
}

export default function <T extends StyleSheet.NamedStyles<T>>(createStyle: (colors: Colors) => T): Styles<T> {
  const { colors } = useColorsStore();

  return {
    colors: colors,
    styles: useMemo(() => createStyle(colors), [colors, createStyle])
  };
}
