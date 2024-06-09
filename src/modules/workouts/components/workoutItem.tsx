import type { i18n as I18nType } from "i18next";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { type RenderItemParams, ScaleDecorator } from "react-native-draggable-flatlist";
import Animated from "react-native-reanimated";

import type { WorkoutItem as WorkoutItemType } from "../../../db/schemas/workoutItem.ts";
import useStyles from "../../../hooks/useStyles.ts";
import type { Colors } from "../../../types/Colors.ts";
import DragIsland from "../../../ui/dragIsland.tsx";
import { Text } from "../../../ui/text.tsx";
import { AddSetButton } from "./addSetButton.tsx";
import { SetItem } from "./setItem.tsx";

const ACTIVE_SCALE = 1.015;

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
    <ScaleDecorator activeScale={ACTIVE_SCALE}>
      <Animated.View style={styles.workoutItem}>
        <Pressable
          onLongPress={drag}
          disabled={isActive}
        >
          <View style={styles.dragIslandContainer}>
            <DragIsland
              size={40}
              vertical={true}
            />
          </View>
        </Pressable>
        <View style={styles.itemContent}>
          <Text fontSize={18}>{exercise.copies[language].title}</Text>
          <View style={styles.setItems}>
            {exerciseItem.sets.map((set) => (
              <SetItem
                i18n={i18n}
                set={set}
                key={set._id.toString()}
              />
            ))}
            <AddSetButton exerciseItem={exerciseItem} />
          </View>
        </View>
      </Animated.View>
    </ScaleDecorator>
  );
};

const style = (colors: Colors) =>
  StyleSheet.create({
    workoutItem: {
      borderRadius: 23,
      minHeight: 140,
      backgroundColor: colors.black,
      marginBottom: 10,
      padding: 20,
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 0,
    },
    dragIslandContainer: {
      justifyContent: "center",
      paddingHorizontal: 20,
    },
    setItems: {
      width: "100%",
      marginTop: 10,
      flexDirection: "row",
      gap: 10,
      flexWrap: "wrap",
    },
    itemContent: {
      flex: 1,
      height: "100%",
      marginRight: 20,
    },
  });
