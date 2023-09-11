import React from "react";
import DatePicker, { CalendarContainer } from "react-datepicker";
import { addDays } from "@fullcalendar/core/internal";
import "react-datepicker/dist/react-datepicker.css";
import { useLogData } from "../Context/LogContext";
import es from "date-fns/locale/es";

const Picker = ({ formData, startDate, handleDateChange }) => {
  const days = ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"];
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const locale = {
    localize: {
      day: (n) => days[n],
      month: (n) => months[n],
    },
    formatLong: {
      date: () => "dd/mm/yyyy",
    },
  };

  const data = useLogData();

  const Mycontainer = ({ className, children }) => {
    return (
      <div
        className="datepicker"
        // style={{
        //   padding: "3px",
        //   height: "302px",
        //   marginTop: "18px",
        // background: "#216ba5",
        // color: "#fff",
        // borderRadius: "4px",
      >
        <CalendarContainer className={className}>
          <div style={{ padding: "3px" }}>Día a registrar</div>
          <div style={{ position: "relative" }}>{children}</div>
        </CalendarContainer>
      </div>
    );
  };

  const logHighlights = data?.logData?.map((e) => new Date(e.date));

  //   logData &&
  //   // },
  // ];
  // // [new Date(e.date)]

  // console.log(logHighlights);

  return (
    // data?.logData &&
    <DatePicker
      className="date-picker"
      dateFormat="dd/MM/yyyy"
      // locale={locale}
      locale={es}
      maxDate={addDays(new Date(), 0)}
      name="date"
      value={formData.date}
      selected={startDate}
      onChange={handleDateChange}
      calendarContainer={Mycontainer}
      inline
      disabledKeyboardNavigation
      // highlightDates={[logData && new Date(logData[0]?.date)]}
      highlightDates={logHighlights}
      // size="xs"
    ></DatePicker>
  );
};

export default Picker;
