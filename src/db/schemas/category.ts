import { BSON, Realm } from "realm";

import type { CategoryCopy } from "./categoryCopy.ts";
import type { Exercise } from "./exercise.ts";

export class Category extends Realm.Object<Category> {
  _id!: BSON.ObjectId;
  copies!: Realm.Dictionary<CategoryCopy>;
  exercises!: Realm.List<Exercise>;
  color!: string;
  image?: string;

  static schema: Realm.ObjectSchema = {
    name: "Category",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      copies: "CategoryCopy{}",
      color: "string",
      image: "string?",

      exercises: {
        type: "linkingObjects",
        objectType: "Exercise",
        property: "category",
      },
    },
  };
}
