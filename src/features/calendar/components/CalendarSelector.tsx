import "../styles/CalendarSelector.css";
import { format } from "date-fns";
import useCalendarStore from "../store/useCalendarStore";

function CalendarSelector({
    dateFormat,
    increment,
    decrement,
    dateType,
}: {
    dateFormat: string;
    increment: () => void;
    decrement: () => void;
    dateType: string;
}) {
    const { getActiveDate } = useCalendarStore((state) => state);

    return (
        <div className="calendar-selector">
            <button onClick={decrement}>Previous {dateType}</button>
            <p className={`calendar-${dateType.toLowerCase()}`}>{format(getActiveDate(), dateFormat)}</p>
            <button onClick={increment}>Next {dateType}</button>
        </div>
    );
}

export default CalendarSelector;
