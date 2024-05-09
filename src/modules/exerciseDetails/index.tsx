import type { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { BSON } from "realm";

import { CONTENT_PADDING_TOP } from "../../constants.ts";
import { useObject } from "../../db";
import { Exercise } from "../../db/schemas/exercise.ts";
import useStyles from "../../hooks/useStyles.ts";
import type { Colors } from "../../types/Colors.ts";
import type { ExerciseNavigatorParamList } from "../../types/ExerciseNavigatorParamList.ts";
import { ExerciseInfo } from "./components/exerciseInfo.tsx";

export const ExerciseDetails: React.FC<
  StackScreenProps<ExerciseNavigatorParamList, "exercise-details">
> = ({ route }) => {
  const { styles } = useStyles(style);
  const exercise = useObject(Exercise, new BSON.ObjectId(route.params?.exerciseId));

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainerStyle}
    >
      {exercise && <ExerciseInfo exercise={exercise} />}
    </ScrollView>
  );
};

const style = (color: Colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color.background,
    },
    contentContainerStyle: {
      paddingTop: CONTENT_PADDING_TOP,
      paddingHorizontal: 10,
    },
  });
