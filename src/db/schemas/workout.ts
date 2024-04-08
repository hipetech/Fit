import { BSON, Realm } from "realm";

import type { WorkoutItem } from "./workoutItem.ts";

export class Workout extends Realm.Object<Workout> {
  _id!: BSON.ObjectId;
  createdAt!: Date;
  lastEdit!: Date;
  comment!: string;
  workoutItems!: Realm.List<WorkoutItem>;

  static schema: Realm.ObjectSchema = {
    name: "Workout",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      createdAt: "date",
      lastEdit: "date",
      comment: "string",
      workoutItems: "WorkoutItem[]",
    },
  };
}
