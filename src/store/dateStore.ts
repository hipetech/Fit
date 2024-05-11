import { create } from "zustand";

type DateState = {
  date: Date;
  setDate: (date: Date) => void;
};

export const useDateStore = create<DateState>((setState) => ({
  date: new Date(),
  setDate: (date: Date) => setState(() => ({ date })),
}));
