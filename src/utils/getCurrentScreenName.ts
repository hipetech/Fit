import { ScreenNavigation } from "../types/ScreenNavigation";

export function getCurrentScreenName(navigation: ScreenNavigation): string | undefined {
  const index = navigation.getState().index;
  return navigation.getState().routes?.[index]?.name;
}
