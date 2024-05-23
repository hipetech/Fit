import type { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-ui-lib";
import Realm from "realm";

import Minus from "../../../assets/icons/minus.svg";
import Plus from "../../../assets/icons/plus.svg";
import { createExerciseItem } from "../../../db/helpers/createExerciseItem.ts";
import { createWorkout } from "../../../db/helpers/createWorkout.ts";
import { createWorkoutItem } from "../../../db/helpers/createWorkoutItem.ts";
import type { Exercise } from "../../../db/schemas/exercise.ts";
import type { ExerciseItem as ExerciseItemType } from "../../../db/schemas/exerciseItem.ts";
import { Workout } from "../../../db/schemas/workout.ts";
import useStyles from "../../../hooks/useStyles.ts";
import type { Colors } from "../../../types/Colors.ts";
import type { ExerciseNavigatorParamList } from "../../../types/ExerciseNavigatorParamList.ts";
import type { Locale } from "../../../types/Locale.ts";
import { Button } from "../../../ui/button.tsx";
import { Text } from "../../../ui/text.tsx";
import { calculateExerciseCount } from "../utils/calculateExerciseCount.ts";

interface ExerciseItemProps {
  exercise: Exercise;
  workout: Workout | undefined;
  date: Date;
  realm: Realm;
  language: Locale;
  navigation: StackNavigationProp<ExerciseNavigatorParamList, "exercise-list">;
}

export const ExerciseItem: React.FC<ExerciseItemProps> = ({
  exercise,
  workout,
  date,
  realm,
  language,
  navigation,
}) => {
  const { styles, colors } = useStyles(style);
  const { navigate } = navigation;

  const count = calculateExerciseCount(exercise, workout);

  const addExercise = () => {
    const workoutItem = createWorkoutItem([createExerciseItem(exercise)]);
    realm.write(() => {
      if (workout) {
        workout.workoutItems.push(workoutItem);
      } else {
        realm.create("Workout", createWorkout(date, [workoutItem]));
      }
    });
  };

  const removeExercise = () => {
    if (workout) {
      const latestExercises: ExerciseItemType[] = [];

      workout.workoutItems.forEach((workoutItem) => {
        workoutItem.exerciseItems.forEach((exerciseItem) => {
          if (exerciseItem.exercise._id.equals(exercise._id)) {
            latestExercises.push(exerciseItem);
          }
        });
      });

      const latestExercise = latestExercises.at(-1);

      if (latestExercise) {
        realm.write(() => {
          if (latestExercise.workoutItem[0].exerciseItems.length === 1) {
            realm.delete(latestExercise.workoutItem[0]);
          }

          if (workout.workoutItems.length === 0) {
            realm.delete(workout);
          }

          realm.delete(latestExercises.at(-1));
        });
      }
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigate("exercise-details", { exerciseId: exercise._id.toString() })}
      >
        <Text fontSize={18}>{exercise.copies[language].title}</Text>
      </TouchableOpacity>
      <View style={styles.counterSection}>
        {count > 0 && (
          <>
            <Button
              onPress={removeExercise}
              round={true}
              backgroundColor={colors.background}
            >
              <Minus fill={colors.white} />
            </Button>
            <Text
              fontSize={16}
              style={styles.counter}
            >
              {count.toString()}
            </Text>
          </>
        )}
        <Button
          onPress={addExercise}
          round={true}
          backgroundColor={colors.background}
        >
          <Plus fill={colors.white} />
        </Button>
      </View>
    </View>
  );
};

const style = (colors: Colors) =>
  StyleSheet.create({
    container: {
      width: "100%",
      height: 80,
      backgroundColor: colors.black,
      borderRadius: 23,
      paddingHorizontal: 20,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    counterSection: {
      flexDirection: "row",
      alignItems: "center",
    },
    counter: {
      marginHorizontal: 12,
    },
  });
