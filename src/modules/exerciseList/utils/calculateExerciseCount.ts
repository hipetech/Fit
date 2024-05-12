import type { Exercise } from "../../../db/schemas/exercise.ts";
import type { Workout } from "../../../db/schemas/workout.ts";

export function calculateExerciseCount(exercise: Exercise, workout: Workout | undefined): number {
  if (workout) {
    return workout.workoutItems.reduce((accumulator, workoutItem) => {
      return (
        accumulator +
        workoutItem.exerciseItems.reduce((accumulator, exerciseItem) => {
          return accumulator + (exerciseItem.exercise._id.equals(exercise._id) ? 1 : 0);
        }, 0)
      );
    }, 0);
  }
  return 0;
}
