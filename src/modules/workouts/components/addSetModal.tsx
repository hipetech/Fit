import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import type { ExerciseItem } from "../../../db/schemas/exerciseItem.ts";
import { AppEvents } from "../../../emmiter.ts";
import useEmmiter from "../../../hooks/useEmitter.ts";
import { Dialog } from "../../../ui/dialog.tsx";
import { SetForm } from "./setForm.tsx";

export const AddSetModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentExerciseItem, setCurrentExerciseItem] = useState<ExerciseItem | null>(null);

  const {
    i18n: { language, t },
  } = useTranslation();

  const toggleModal = (exerciseItem: ExerciseItem) => {
    setIsVisible((value) => !value);
    setCurrentExerciseItem(exerciseItem);
  };

  useEmmiter(AppEvents.OPEN_ADD_SET_MODAL, toggleModal);

  if (!currentExerciseItem) return null;

  return (
    <Dialog
      title={t("workout.addSetModal.title", {
        value: currentExerciseItem?.exercise.copies[language].title,
      })}
      visible={isVisible}
      onDismiss={() => {
        setIsVisible(false);
        setCurrentExerciseItem(null);
      }}
    >
      <SetForm exerciseItem={currentExerciseItem} />
    </Dialog>
  );
};
