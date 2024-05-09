import { StyleSheet } from "react-native";

export const shadows = StyleSheet.create({
  shadowBase: {
    shadowOffset: {
      width: 0, // horizontal offset
      height: 2, // vertical offset
    },
    shadowOpacity: 0.25, // shadow opacity
    shadowRadius: 3.84, // shadow blur radius
  },
});
