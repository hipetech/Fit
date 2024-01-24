import EventEmitter from "react-native/Libraries/vendor/emitter/EventEmitter";

export const AppEmitter = new EventEmitter();

export enum AppEvents {
  OPEN_DRAWER = "open-drawer",
}
