import "../styles/Calendar.css";
import CalendarFilters from "./CalendarFilters";
import CalendarHeader from "./CalendarHeader";
import CalendarView from "./CalendarView";

function Calendar() {
    return (
        <div className="calendar">
            <CalendarHeader />
            <CalendarFilters />
            <CalendarView />
        </div>
    );
}

export default Calendar;
