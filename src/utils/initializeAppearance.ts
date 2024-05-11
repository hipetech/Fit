import AsyncStorage from "@react-native-async-storage/async-storage";
import { Appearance, Platform } from "react-native";
import changeNavigationBarColor from "react-native-navigation-bar-color";

import { AsyncStorageValues } from "../asyncStorageValues.ts";
import { useAppearanceStore } from "../store/appearanceStore.ts";
import { darkColors } from "../styles/darkColors.ts";
import { lightColors } from "../styles/lightColors.ts";

export async function initializeAppearance() {
  const savedTheme = await AsyncStorage.getItem(AsyncStorageValues.COLOR_THEME);
  switch (savedTheme || Appearance.getColorScheme()) {
    case "dark":
      useAppearanceStore.setState({ theme: "dark", colors: darkColors });
      break;
    default:
      useAppearanceStore.setState({ theme: "light", colors: lightColors });
      break;
  }
  Platform.OS === "android" && changeNavigationBarColor(useAppearanceStore.getState().colors.black);
}
