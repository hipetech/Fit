import { BSON } from "realm";

import type { ExerciseItem } from "../schemas/exerciseItem.ts";
import type { WorkoutItem } from "../schemas/workoutItem.ts";

export const createWorkoutItem = (
  exerciseItems: ExerciseItem[] = [],
  comment = ""
): WorkoutItem => {
  const date = new Date();

  return {
    _id: new BSON.ObjectId(),
    comment,
    createdAt: date,
    lastEdit: date,
    exerciseItems,
  } as unknown as WorkoutItem;
};
