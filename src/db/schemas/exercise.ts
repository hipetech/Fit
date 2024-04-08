import { BSON, Realm } from "realm";

import type { ExerciseCopy } from "./exerciseCopy.ts";
import type { ExerciseItem } from "./exerciseItem.ts";

export class Exercise extends Realm.Object<Exercise> {
  _id!: BSON.ObjectId;
  createdAt!: Date;
  lastEdit!: Date;
  copies!: Realm.List<ExerciseCopy>;
  exerciseItems!: Realm.List<ExerciseItem>;

  static schema: Realm.ObjectSchema = {
    name: "Exercise",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      createdAt: "date",
      lastEdit: "date",
      copies: "ExerciseCopy[]",

      exerciseItems: {
        type: "linkingObjects",
        objectType: "ExerciseItem",
        property: "exercise",
      },
    },
  };
}
