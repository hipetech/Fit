import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";

import { CONTENT_PADDING_TOP } from "../../constants.ts";
import type { WorkoutItem as WorkoutItemType } from "../../db/schemas/workoutItem.ts";
import useStyles from "../../hooks/useStyles.ts";
import useWorkout from "../../hooks/useWorkout.ts";
import type { Colors } from "../../types/Colors.ts";
import { selectForPlatform } from "../../utils/selectForPlatform.ts";
import { AddSetModal } from "./components/addSetModal.tsx";
import { WorkoutItem } from "./components/workoutItem.tsx";

export const Workouts = () => {
  const { styles } = useStyles(style);
  const { workoutItems = [] } = useWorkout() || {};

  const { i18n } = useTranslation();

  return (
    <>
      <DraggableFlatList
        data={workoutItems as WorkoutItemType[]}
        onDragEnd={({ data }) => console.log(data)}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ ...props }) => (
          <WorkoutItem
            i18n={i18n}
            {...props}
          />
        )}
        contentContainerStyle={styles.contentContainer}
        style={styles.content}
        showsVerticalScrollIndicator={false}
      />
      <AddSetModal />
    </>
  );
};

const style = (colors: Colors) =>
  StyleSheet.create({
    content: {
      width: "100%",
      height: "100%",
      backgroundColor: colors.background,
    },
    contentContainer: {
      backgroundColor: colors.background,
      paddingVertical: selectForPlatform(CONTENT_PADDING_TOP, 70),
      paddingHorizontal: 8,
    },
    rowItem: {
      height: 100,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: "white",
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "center",
    },
  });
