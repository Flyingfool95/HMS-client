import "../styles/CalendarView.css";
import useCalendarStore from "../store/useCalendarStore";
import CalendarDay from "./CalendarDay";

function CalendarView() {
    const { getDaysInCurrentMonth, getFirstMonthDayIndex } = useCalendarStore((state) => state);

    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const daysInMonth = getDaysInCurrentMonth();
    const firstDayIndex = getFirstMonthDayIndex();

    const startPlaceholders = Array.from({ length: firstDayIndex });
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const totalDisplayed = firstDayIndex + daysInMonth;
    const endPlaceholderCount = (7 - (totalDisplayed % 7)) % 7;
    const endPlaceholders = Array.from({ length: endPlaceholderCount });

    return (
        <div className="calendar-view">
            {weekdays.map((day) => (
                <div key={day} className="calendar-weekday">
                    {day}
                </div>
            ))}

            {startPlaceholders.map((_, i) => (
                <CalendarDay key={`start-${i}`} dayNumber={0} />
            ))}

            {daysArray.map((day) => (
                <CalendarDay key={day} dayNumber={day} />
            ))}

            {endPlaceholders.map((_, i) => (
                <CalendarDay key={`end-${i}`} dayNumber={0} />
            ))}
        </div>
    );
}

export default CalendarView;
