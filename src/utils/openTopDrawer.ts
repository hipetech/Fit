import { AppEmitter, AppEvents } from "../emmiter.ts";

export function openTopDrawer() {
  AppEmitter.emit(AppEvents.OPEN_DRAWER);
}
