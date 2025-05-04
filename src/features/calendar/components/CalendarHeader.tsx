import useCalendarStore from "../store/useCalendarStore";
import { format } from "date-fns";

function CalendarHeader() {
    const { getActiveDate, incrementMonth, decrementMonth, resetToToday } = useCalendarStore((state) => state);

    return (
        <div className="calendar-header">
            <h1>{format(getActiveDate(), "yyyy")}</h1>
            <h2>{format(getActiveDate(), "MMMM")}</h2>
            <button onClick={incrementMonth}>Next month</button>
            <button onClick={decrementMonth}>Previous month</button>
            <button onClick={resetToToday}>Reset</button>
        </div>
    );
}

export default CalendarHeader;
