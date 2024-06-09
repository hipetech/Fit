import { BSON, Realm } from "realm";

import type { ExerciseItem } from "./exerciseItem.ts";

export class Set extends Realm.Object<Set> {
  _id!: BSON.ObjectId;
  value!: number;
  units!: string;
  reps!: number;
  createdAt!: Date;
  lastEdit!: Date;
  exerciseItem!: ExerciseItem;

  static schema: Realm.ObjectSchema = {
    name: "Set",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      value: "float",
      units: "string",
      reps: "int",
      createdAt: "date",
      lastEdit: "date",

      exerciseItem: {
        type: "linkingObjects",
        objectType: "ExerciseItem",
        property: "sets",
      },
    },
  };
}
