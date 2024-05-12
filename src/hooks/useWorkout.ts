import { useQuery } from "../db";
import { Workout } from "../db/schemas/workout.ts";
import { useDateStore } from "../store/dateStore.ts";

export default (): Workout | undefined => {
  const { date } = useDateStore();

  return useQuery(Workout, (workouts) => workouts.filtered("workoutDate == $0", date), [date])[0];
};
