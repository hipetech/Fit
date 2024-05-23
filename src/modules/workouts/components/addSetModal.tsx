import React, { useEffect, useState } from "react";

import { AppEmitter, AppEvents } from "../../../emmiter.ts";
import { Dialog } from "../../../ui/dialog.tsx";
import { AddSetForm } from "./addSetForm.tsx";

export const AddSetModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleModal = () => setIsVisible((value) => !value);

  useEffect(() => {
    AppEmitter.addListener(AppEvents.OPEN_ADD_SET_MODAL, toggleModal);
    return () => {
      AppEmitter.removeAllListeners(AppEvents.OPEN_ADD_SET_MODAL);
    };
  }, []);

  return (
    <Dialog
      visible={isVisible}
      onDismiss={() => setIsVisible(false)}
    >
      <AddSetForm />
    </Dialog>
  );
};
