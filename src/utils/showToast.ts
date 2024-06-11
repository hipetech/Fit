import i18next from "i18next";

import { AppEmitter, AppEvents } from "../emmiter.ts";
import { useAppearanceStore } from "../store/appearanceStore.ts";

export class ShowToast {
  static addSet() {
    AppEmitter.emit(
      AppEvents.SHOW_TOAST,
      useAppearanceStore.getState().colors.green,
      i18next.t("toast.messages.addSet"),
      800
    );
  }

  static addExercise() {
    AppEmitter.emit(
      AppEvents.SHOW_TOAST,
      useAppearanceStore.getState().colors.green,
      i18next.t("toast.messages.addExercise"),
      800
    );
  }

  static deleteSet() {
    AppEmitter.emit(
      AppEvents.SHOW_TOAST,
      useAppearanceStore.getState().colors.red,
      i18next.t("toast.messages.deleteSet"),
      800
    );
  }

  static deleteExercise() {
    AppEmitter.emit(
      AppEvents.SHOW_TOAST,
      useAppearanceStore.getState().colors.red,
      i18next.t("toast.messages.deleteExercise"),
      800
    );
  }
}
