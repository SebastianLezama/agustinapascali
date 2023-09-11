import { useEffect, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridMonth from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import { gapi } from "gapi-script";
import { getTableByEmail } from "../components/SupabaseClient";
import Modal from "../components/Modal";
import "./Calendar.css";
import { Box } from "@chakra-ui/react";
import esLocale from "@fullcalendar/core/locales/es";
import { useAdminData } from "../Context/AdminContext";

function Calendar() {
  const [currentEvent, setCurrentEvent] = useState([]);

  const [logInfo, setLogInfo] = useState([]);

  const modalRef = useRef();
  const [showModal, setShowModal] = useState(false);

  const { calendarEvents } = useAdminData();

  const eventClick = async (info) => {
    const currentEvent = calendarEvents.find(
      (e) =>
        e.recurringEventId === info.event._def.publicId ||
        e.id === info.event._def.publicId
    );
    const eventInfo = await getTableByEmail("Log", currentEvent.email);
    eventInfo.sort((a, b) => (a.name > b.name ? 1 : -1));
    setLogInfo(
      eventInfo.map((e) =>
        e.date ? { ...e, date: new Date(e.date).toLocaleDateString() } : e
      )
    );
    setTimeout(
      console.log(
        logInfo.map((e) =>
          e.date ? { ...e, date: new Date(e.date).toLocaleDateString() } : e
        )
      ),
      5000
    );
    setCurrentEvent(await getTableByEmail("Users", currentEvent.email));
  };

  const closeModal = (e) => {
    if (modalRef.current === e.target) setShowModal(false);
  };

  return (
    <>
      {/* <div className="main-calendar"> */}
      <Box
        mx={{ base: "10px", md: "30px", lg: "55px", xl: "80px" }}
        my={"20px"}
        minW={"450px"}
      >
        <FullCalendar
          plugins={[
            dayGridMonth,
            timeGridPlugin,
            interactionPlugin,
            googleCalendarPlugin,
          ]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          initialView="timeGridWeek"
          locale={esLocale}
          selectable={true}
          editable={true}
          eventClick={eventClick}
          events={calendarEvents}
          height="700px"
          minW="450px"
          // width="100%"
          weekends={false}
          slotMinTime="10:00:00"
          slotMaxTime="21:00:00"
        />
      </Box>
      {/* </div> */}
      <Modal
        showModal={showModal}
        modalRef={modalRef}
        closeModal={closeModal}
        logInfo={logInfo}
        currentEvent={currentEvent}
      />
    </>
  );
}

export default Calendar;
