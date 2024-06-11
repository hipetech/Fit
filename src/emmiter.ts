import EventEmitter from "react-native/Libraries/vendor/emitter/EventEmitter";

export const AppEmitter = new EventEmitter();

export enum AppEvents {
  OPEN_DRAWER = "open-drawer",
  // workout
  OPEN_ADD_SET_MODAL = "open-add-set-modal",
  OPEN_EDIT_SET_MODAL = "open-edit-set-modal",
}
