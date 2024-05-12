import { BSON } from "realm";

import type { WorkoutItem } from "../schemas/workoutItem.ts";

export const createWorkout = (workoutDate: Date, workoutItems: WorkoutItem[], comment = "") => {
  const date = new Date();

  return {
    _id: new BSON.ObjectId(),
    createdAt: date,
    lastEdit: date,
    workoutDate,
    comment,
    workoutItems,
  } as unknown as WorkoutItem;
};
