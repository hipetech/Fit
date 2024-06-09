import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-ui-lib";

import Plus from "../../../assets/icons/plus.svg";
import type { ExerciseItem } from "../../../db/schemas/exerciseItem.ts";
import { AppEmitter, AppEvents } from "../../../emmiter.ts";
import useStyles from "../../../hooks/useStyles.ts";
import type { Colors } from "../../../types/Colors.ts";

interface AddSetButtonProps {
  exerciseItem: ExerciseItem;
}

export const AddSetButton: React.FC<AddSetButtonProps> = ({ exerciseItem }) => {
  const { styles, colors } = useStyles(style);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => AppEmitter.emit(AppEvents.OPEN_ADD_SET_MODAL, exerciseItem)}
    >
      <Plus fill={colors.white} />
    </TouchableOpacity>
  );
};

const style = (colors: Colors) =>
  StyleSheet.create({
    container: {
      width: 55,
      height: 65,
      borderRadius: 12,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.background,
    },
  });
