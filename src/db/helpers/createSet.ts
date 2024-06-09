import { BSON } from "realm";

export const createSet = (value: number, units: string, reps: number) => {
  return {
    _id: new BSON.ObjectId(),
    value,
    units,
    reps,
    createdAt: new Date(),
    lastEdit: new Date(),
  };
};
