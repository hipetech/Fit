import type { i18n as I18nType } from "i18next";
import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { type RenderItemParams } from "react-native-draggable-flatlist";

import type { WorkoutItem as WorkoutItemType } from "../../../db/schemas/workoutItem.ts";
import useStyles from "../../../hooks/useStyles.ts";
import type { Colors } from "../../../types/Colors.ts";
import { Text } from "../../../ui/text.tsx";

type WorkoutItemProps = RenderItemParams<WorkoutItemType> & {
  i18n: I18nType;
};

export const WorkoutItem = ({ item, drag, isActive, i18n }: WorkoutItemProps) => {
  const { styles } = useStyles(style);
  const { language } = i18n;
  const { exerciseItems } = item;
  const [exerciseItem] = exerciseItems;
  const { exercise } = exerciseItem;

  return (
    <Pressable
      onLongPress={drag}
      disabled={isActive}
      style={styles.workoutItem}
    >
      <Text fontSize={18}>{exercise.copies[language].title}</Text>
    </Pressable>
  );
};

const style = (colors: Colors) =>
  StyleSheet.create({
    workoutItem: {
      borderRadius: 23,
      minHeight: 140,
      backgroundColor: colors.black,
      marginBottom: 10,
      padding: 12,
    },
  });
