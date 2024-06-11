import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";

import useWorkout from "../../../hooks/useWorkout.ts";
import { Text } from "../../../ui/text.tsx";
import { getCurrentWorkoutValue } from "../../../utils/getCurrentWorkoutValue.ts";

export const CurrentWorkout = () => {
  const workout = useWorkout();

  const { exercises, sets } = useMemo(() => getCurrentWorkoutValue(workout), [workout]);

  const { t } = useTranslation();

  const value = `${t("topDrawer.currentWorkout.exercises", { value: exercises })} ${t("topDrawer.currentWorkout.sets", { value: sets, count: sets })}`;

  return <Text fontSize={16}>{value}</Text>;
};
