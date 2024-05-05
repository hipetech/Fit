import { BSON, Realm } from "realm";

import type { Category } from "./category.ts";
import type { ExerciseCopy } from "./exerciseCopy.ts";
import type { ExerciseItem } from "./exerciseItem.ts";

export class Exercise extends Realm.Object<Exercise> {
  _id!: BSON.ObjectId;
  createdAt!: Date;
  lastEdit!: Date;
  copies!: Realm.Dictionary<ExerciseCopy>;
  exerciseItems!: Realm.List<ExerciseItem>;
  category!: Category;

  static schema: Realm.ObjectSchema = {
    name: "Exercise",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      createdAt: "date",
      lastEdit: "date",
      copies: "ExerciseCopy{}",
      category: "Category",

      exerciseItems: {
        type: "linkingObjects",
        objectType: "ExerciseItem",
        property: "exercise",
      },
    },
  };
}
