import "../styles/CalendarHeader.css";
import useCalendarStore from "../store/useCalendarStore";
import CalendarSelector from "./CalendarSelector";

function CalendarHeader() {
    const { incrementMonth, decrementMonth, resetToToday, incrementYear, decrementYear } = useCalendarStore(
        (state) => state
    );

    return (
        <div className="calendar-header">
            <CalendarSelector
                dateFormat={"yyyy"}
                increment={incrementYear}
                decrement={decrementYear}
                dateType={"Year"}
            />
            <CalendarSelector
                dateFormat={"MMMM"}
                increment={incrementMonth}
                decrement={decrementMonth}
                dateType={"Month"}
            />

            <button className="calendar-reset" onClick={resetToToday}>Reset</button>
        </div>
    );
}

export default CalendarHeader;
