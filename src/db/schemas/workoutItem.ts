import { BSON, Realm } from "realm";

import type { ExerciseItem } from "./exerciseItem.ts";

export class WorkoutItem extends Realm.Object<WorkoutItem> {
  _id!: BSON.ObjectId;
  comments!: string;
  createdAt!: Date;
  lastEdit!: Date;
  exerciseItems!: Realm.List<ExerciseItem>;

  static schema: Realm.ObjectSchema = {
    name: "WorkoutItem",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      comments: "string",
      createdAt: "date",
      lastEdit: "date",
      exerciseItems: "ExerciseItem[]",
    },
  };
}
