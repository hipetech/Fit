import React from "react";
import { useTranslation } from "react-i18next";

import { useDateStore } from "../../../store/dateStore.ts";
import { Text } from "../../../ui/text.tsx";

export const CurrentDate = () => {
  const { date } = useDateStore();
  const {
    i18n: { language },
  } = useTranslation();

  return <Text fontSize={16}>{date.toLocaleDateString(language, { dateStyle: "medium" })}</Text>;
};
