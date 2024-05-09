import { SCREEN_WIDTH } from "../../constants.ts";

export const NUM_COLUMNS = 2;

export const GAP = 10;

export const CONTAINER_PADDING = 8;

const AVAILABLE_SPACE = SCREEN_WIDTH - (NUM_COLUMNS - 1) * (GAP + CONTAINER_PADDING * 2);

export const ITEM_SIZE = AVAILABLE_SPACE / NUM_COLUMNS;
