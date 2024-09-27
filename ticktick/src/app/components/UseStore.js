import { create } from "zustand";

export const useStore = create((set) => ({
  recurrence: "daily",
  customInterval: 1,
  startDate: null,
  endDate: null,
  selectedDates: [],

  setRecurrence: (recurrence) => set({ recurrence }),
  setCustomInterval: (customInterval) => set({ customInterval }),
  setStartDate: (startDate) => set({ startDate }),
  setEndDate: (endDate) => set({ endDate }),
  setSelectedDates: (selectedDates) => set({ selectedDates }),
}));
