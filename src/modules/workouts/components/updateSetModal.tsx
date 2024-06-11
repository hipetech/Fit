import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { Set } from "../../../db/schemas/set.ts";
import { AppEvents } from "../../../emmiter.ts";
import useEmmiter from "../../../hooks/useEmitter.ts";
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

  useEmmiter(AppEvents.OPEN_EDIT_SET_MODAL, toggleModal);

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
