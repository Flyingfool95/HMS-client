import { addMonths, getDaysInMonth } from "date-fns";
import { create } from "zustand";

interface ICalendarStore {
    today: Date;
    activeDateOffset: number;

    getActiveDate: () => Date;
    daysInCurrentMonth: () => number;

    incrementMonth: () => void;
    decrementMonth: () => void;
    resetToToday: () => void;
}

const useCalendarStore = create<ICalendarStore>((set, get) => ({
    today: new Date(),
    activeDateOffset: 0,

    getActiveDate: () => addMonths(get().today, get().activeDateOffset),
    daysInCurrentMonth: () => getDaysInMonth(addMonths(get().today, get().activeDateOffset)),

    incrementMonth: () => set((state) => ({ activeDateOffset: state.activeDateOffset + 1 })),
    decrementMonth: () => set((state) => ({ activeDateOffset: state.activeDateOffset - 1 })),
    resetToToday: () => set({ activeDateOffset: 0 }),
}));

export default useCalendarStore;
