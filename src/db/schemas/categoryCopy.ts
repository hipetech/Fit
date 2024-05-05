import { BSON, Realm } from "realm";

export class CategoryCopy extends Realm.Object<CategoryCopy> {
  _id!: BSON.ObjectId;
  title!: string;

  static schema: Realm.ObjectSchema = {
    name: "CategoryCopy",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      title: "string",
    },
  };
}
