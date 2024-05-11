import React from "react";

import { useQuery } from "../../db";
import { Workout } from "../../db/schemas/workout.ts";
import { useDateStore } from "../../store/dateStore.ts";
import { WorkoutList } from "./components/workoutList.tsx";

export const Workouts = () => {
  const { date } = useDateStore();
  const workout = useQuery(Workout, (workouts) => workouts.filtered("workoutDate == $0", date))[0];

  console.log(workout);
  return <WorkoutList />;
};
