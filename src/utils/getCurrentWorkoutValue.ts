import type { Workout } from "../db/schemas/workout.ts";

export function getCurrentWorkoutValue(workout: Workout | undefined) {
  let exercises = 0;
  let sets = 0;

  if (workout) {
    workout.workoutItems.forEach((workoutItem) => {
      workoutItem.exerciseItems.forEach((exerciseItem) => {
        exercises += 1;
        sets += exerciseItem.sets.length;
      });
    });
  }

  return {
    exercises,
    sets,
  };
}
