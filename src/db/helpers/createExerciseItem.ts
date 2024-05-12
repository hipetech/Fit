import { BSON } from "realm";

import type { Exercise } from "../schemas/exercise.ts";
import type { ExerciseItem } from "../schemas/exerciseItem.ts";
import type { Set as ExerciseItemSet } from "../schemas/set.ts";

export const createExerciseItem = (
  exercise: Exercise,
  sets: ExerciseItemSet[] = []
): ExerciseItem => {
  const date = new Date();

  return {
    _id: new BSON.ObjectId(),
    createdAt: date,
    lastEdit: date,
    sets,
    exercise,
  } as unknown as ExerciseItem;
};
