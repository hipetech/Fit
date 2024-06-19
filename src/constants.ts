import { Dimensions } from "react-native";

import { selectForPlatform } from "./utils/selectForPlatform.ts";

export const SCREEN_WIDTH = Dimensions.get("screen").width;
export const SCREEN_HEIGHT = Dimensions.get("screen").height;

export const WINDOW_WIDTH = Dimensions.get("window").width;
export const WINDOW_HEIGHT = Dimensions.get("window").height;

export const CONTENT_PADDING_TOP = selectForPlatform(SCREEN_HEIGHT * 0.14, SCREEN_HEIGHT * 0.08);
