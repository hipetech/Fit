import { create } from "zustand";

import { getCurrentDateWithoutTime } from "../utils/getCurrentDateWithoutTIme.ts";

type DateState = {
  date: Date;
  setDate: (date: Date) => void;
};

export const useDateStore = create<DateState>((setState) => ({
  date: getCurrentDateWithoutTime(),
  setDate: (date: Date) => setState(() => ({ date })),
}));
