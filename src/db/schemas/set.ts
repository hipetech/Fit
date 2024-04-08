import { BSON, Realm } from "realm";

export class Set extends Realm.Object<Set> {
  _id!: BSON.ObjectId;
  value!: number;
  units!: string;
  createdAt!: Date;
  lastEdit!: Date;

  static schema: Realm.ObjectSchema = {
    name: "Set",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      value: "float",
      units: "string",
      createdAt: "date",
      lastEdit: "date",
    },
  };
}
