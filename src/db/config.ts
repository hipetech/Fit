import { Category } from "./schemas/category.ts";
import { CategoryCopy } from "./schemas/categoryCopy.ts";
import { Exercise } from "./schemas/exercise.ts";
import { ExerciseCopy } from "./schemas/exerciseCopy.ts";
import { ExerciseItem } from "./schemas/exerciseItem.ts";
import { Set } from "./schemas/set.ts";
import { Workout } from "./schemas/workout.ts";
import { WorkoutItem } from "./schemas/workoutItem.ts";

export const config: Realm.Configuration = {
  schema: [Workout, WorkoutItem, Exercise, ExerciseCopy, ExerciseItem, Set, Category, CategoryCopy],
  path: "fit.realm",
  schemaVersion: 0,
};
