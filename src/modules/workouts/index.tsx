import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import { List } from "realm";

import { CONTENT_PADDING_TOP } from "../../constants.ts";
import { useRealm } from "../../db";
import type { WorkoutItem as WorkoutItemType } from "../../db/schemas/workoutItem.ts";
import useStyles from "../../hooks/useStyles.ts";
import useWorkout from "../../hooks/useWorkout.ts";
import type { Colors } from "../../types/Colors.ts";
import { selectForPlatform } from "../../utils/selectForPlatform.ts";
import { AddSetModal } from "./components/addSetModal.tsx";
import { UpdateSetModal } from "./components/updateSetModal.tsx";
import { WorkoutItem } from "./components/workoutItem.tsx";

export const Workouts = () => {
  const { styles } = useStyles(style);
  const workout = useWorkout();
  const realm = useRealm();

  const { workoutItems = [] } = workout || {};

  const { i18n } = useTranslation();

  const updateWorkout = (workoutItems: WorkoutItemType[]) => {
    if (workout) {
      realm.write(() => {
        workout.workoutItems = workoutItems as unknown as List<WorkoutItemType>;
      });
    }
  };

  return (
    <>
      <DraggableFlatList
        data={workoutItems as WorkoutItemType[]}
        onDragEnd={({ data }) => updateWorkout(data)}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ ...props }) => (
          <WorkoutItem
            i18n={i18n}
            realm={realm}
            {...props}
          />
        )}
        contentContainerStyle={styles.contentContainer}
        style={styles.content}
        showsVerticalScrollIndicator={false}
      />
      <AddSetModal />
      <UpdateSetModal />
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
