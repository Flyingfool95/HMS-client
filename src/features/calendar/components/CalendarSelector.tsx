import useCalendarStore from "../store/useCalendarStore";
import { format } from "date-fns";

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
            <h1>{format(getActiveDate(), dateFormat)}</h1>
            <button onClick={increment}>Next {dateType}</button>
            <button onClick={decrement}>Previous {dateType}</button>
        </div>
    );
}

export default CalendarSelector;
