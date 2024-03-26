import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { type RenderItemParams, ScaleDecorator } from "react-native-draggable-flatlist";

import Text from "../../../components/text.tsx";
import useStyles from "../../../hooks/useStyles.ts";
import type { Colors } from "../../../types/Colors.ts";

type Item = {
  key: string;
  label: string;
  height: number;
  width: number;
  backgroundColor: string;
};

export const WorkoutItem = ({ item, drag, isActive }: RenderItemParams<Item>) => {
  const { styles } = useStyles(style);

  return (
    <ScaleDecorator>
      <Pressable
        onLongPress={drag}
        disabled={isActive}
        style={styles.workoutItem}
      >
        <Text style={styles.text}>{item.label}</Text>
      </Pressable>
    </ScaleDecorator>
  );
};

const style = (colors: Colors) =>
  StyleSheet.create({
    workoutItem: {
      borderRadius: 23,
      height: 140,
      backgroundColor: colors.black,
    },
    text: {
      fontSize: 24,
    },
  });
