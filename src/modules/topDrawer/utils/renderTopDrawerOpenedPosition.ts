import { SCREEN_HEIGHT } from "../../../constants.ts";
import { selectForPlatform } from "../../../utils/selectForPlatform.ts";

const REGULAR_SCREEN = 812;

const SMALL_SCREEN_INDEX = 0.45;

const REGULAR_SCREEN_INDEX_IOS = 0.59;
const REGULAR_SCREEN_INDEX_ANDROID = 0.52;

export function renderTopDrawerOpenedPosition() {
  if (SCREEN_HEIGHT < REGULAR_SCREEN) {
    return -(SCREEN_HEIGHT * SMALL_SCREEN_INDEX);
  }
  return selectForPlatform(
    -SCREEN_HEIGHT * REGULAR_SCREEN_INDEX_IOS,
    -SCREEN_HEIGHT * REGULAR_SCREEN_INDEX_ANDROID
  );
}
