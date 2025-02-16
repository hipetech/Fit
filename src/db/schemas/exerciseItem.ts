import { BSON, Realm } from "realm";

import type { Exercise } from "./exercise.ts";
import type { Set } from "./set.ts";
import type { WorkoutItem } from "./workoutItem.ts";

export class ExerciseItem extends Realm.Object<ExerciseItem> {
  _id!: BSON.ObjectId;
  createdAt!: Date;
  lastEdit!: Date;
  sets!: Realm.List<Set>;
  exercise!: Exercise;

  workoutItem!: Realm.List<WorkoutItem>;

  static schema: Realm.ObjectSchema = {
    name: "ExerciseItem",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      createdAt: "date",
      lastEdit: "date",
      sets: "Set[]",
      exercise: "Exercise",

      workoutItem: {
        type: "linkingObjects",
        objectType: "WorkoutItem",
        property: "exerciseItems",
      },
    },
  };
}
