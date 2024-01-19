import { Platform } from "react-native";

export function selectForPlatform<T>(forIOS: T, forAndroid: T): T {
  return Platform.OS === "ios" ? forIOS : forAndroid;
}
