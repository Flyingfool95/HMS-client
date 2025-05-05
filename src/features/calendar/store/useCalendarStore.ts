import { addMonths, getDay, getDaysInMonth, startOfMonth } from "date-fns";
import { create } from "zustand";

interface ICalendarStore {
    today: Date;
    activeDateOffset: number;

    getActiveDate: () => Date;
    getDaysInCurrentMonth: () => number;
    getFirstMonthDayIndex: () => number;

    incrementMonth: () => void;
    decrementMonth: () => void;

    incrementYear: () => void;
    decrementYear: () => void;
    resetToToday: () => void;
}

const useCalendarStore = create<ICalendarStore>((set, get) => ({
    today: new Date(),
    activeDateOffset: 0,

    getActiveDate: () => addMonths(get().today, get().activeDateOffset),
    getDaysInCurrentMonth: () => getDaysInMonth(addMonths(get().today, get().activeDateOffset)),
    getFirstMonthDayIndex: () => {
        const activeDate = addMonths(get().today, get().activeDateOffset);
        const firstDayOfMonth = startOfMonth(activeDate);
        return getDay(firstDayOfMonth);
    },

    incrementMonth: () => set((state) => ({ activeDateOffset: state.activeDateOffset + 1 })),
    decrementMonth: () => set((state) => ({ activeDateOffset: state.activeDateOffset - 1 })),

    incrementYear: () => set((state) => ({ activeDateOffset: state.activeDateOffset + 12 })),
    decrementYear: () => set((state) => ({ activeDateOffset: state.activeDateOffset - 12 })),
    resetToToday: () => set({ activeDateOffset: 0 }),
}));

export default useCalendarStore;
