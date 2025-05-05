import { useState } from "react";
import "../styles/CalendarDay.css";

function CalendarDay({ dayNumber }: { dayNumber: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={dayNumber === 0 ? "calendar-day calendar-placeholder-day" : "calendar-day"}>
            <p className="calendar-day-number">{dayNumber !== 0 ? dayNumber : null}</p>
        </div>
    );
}

export default CalendarDay;
