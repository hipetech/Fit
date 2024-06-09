import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { Set } from "../../../db/schemas/set.ts";
import { AppEmitter, AppEvents } from "../../../emmiter.ts";
import { Dialog } from "../../../ui/dialog.tsx";
import { SetForm } from "./setForm.tsx";

export const UpdateSetModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [exerciseSetData, setExerciseSetData] = useState<Set | null>(null);
  const { t } = useTranslation();

  const toggleModal = (set: Set) => {
    setIsVisible((value) => !value);
    setExerciseSetData(set);
  };

  useEffect(() => {
    AppEmitter.addListener(AppEvents.OPEN_EDIT_SET_MODAL, toggleModal);
    return () => {
      AppEmitter.removeAllListeners(AppEvents.OPEN_EDIT_SET_MODAL);
    };
  }, []);

  if (!exerciseSetData) return null;

  return (
    <Dialog
      title={t("workout.addSetModal.titleEdit")}
      visible={isVisible}
      onDismiss={() => setIsVisible(false)}
    >
      <SetForm
        set={exerciseSetData}
        closeModal={() => {
          setIsVisible(false);
          setExerciseSetData(null);
        }}
      />
    </Dialog>
  );
};
