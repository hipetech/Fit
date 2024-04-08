import { BSON, Realm } from "realm";

export class ExerciseCopy extends Realm.Object<ExerciseCopy> {
  _id!: BSON.ObjectId;
  title!: string;
  languageCode!: string;
  description!: string;

  static schema: Realm.ObjectSchema = {
    name: "ExerciseCopy",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      title: "string",
      languageCode: "string",
      description: "string",
    },
  };
}
