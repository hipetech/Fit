import { BSON, Realm } from "realm";

import type { ExerciseItem } from "./exerciseItem.ts";
import type { Workout } from "./workout.ts";

export class WorkoutItem extends Realm.Object<WorkoutItem> {
  _id!: BSON.ObjectId;
  comment!: string;
  createdAt!: Date;
  lastEdit!: Date;
  exerciseItems!: Realm.List<ExerciseItem>;

  workouts!: Realm.List<Workout>;

  static schema: Realm.ObjectSchema = {
    name: "WorkoutItem",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      comment: "string",
      createdAt: "date",
      lastEdit: "date",
      exerciseItems: "ExerciseItem[]",

      workouts: {
        type: "linkingObjects",
        objectType: "Workout",
        property: "workoutItems",
      },
    },
  };
}
