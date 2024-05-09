import type { NavigationContainerRef } from "@react-navigation/native";

import type { ExerciseNavigatorParamList } from "./ExerciseNavigatorParamList.ts";
import type { RootNavigatorParamList } from "./RootNavigatorParamList.ts";

export type ScreenNavigation = NavigationContainerRef<
  RootNavigatorParamList & ExerciseNavigatorParamList
>;
