import React from "react";

const MockLog = () => {
  const logInfo = [
    {
      date: "22-03-23",
      alegria: "2",
      enojo: "1",
      tristeza: "1",
      verguenza: null,
      culpa: null,
      frustracion: "1",
      ansiedad: "4",
      sorpresa: null,
      comentario: "Esto es un comentario para comentar 1",
    },
    {
      date: "23-03-23",
      alegria: "2",
      enojo: null,
      tristeza: "1",
      verguenza: null,
      culpa: null,
      frustracion: "1",
      ansiedad: "2",
      sorpresa: null,
      comentario: "Esto es un comentario para comentar 2",
    },
    {
      date: "24-03-23",
      alegria: "4",
      enojo: "1",
      tristeza: "1",
      verguenza: null,
      culpa: null,
      frustracion: "1",
      ansiedad: "2",
      sorpresa: null,
      comentario: "Esto es un comentario para comentar 3",
    },
  ];

  const currentEvent = [
    {
      name: "Agustina P",
    },
  ];

  return (
    <div className="modal">
      <div className="divModal">
        {currentEvent[0].name}
        <div className="calendar">
          {logInfo.map((e) => (
            <div key={e.date}>
              {e.date} - Alegría: {e.alegria} - Enojo: {e.enojo} - Tristeza:{" "}
              {e.tristeza} - Verguenza: {e.verguenza} - Culpa: {e.culpa} -
              Frustración: {e.frustracion} - Ansiedad: {e.ansiedad} - Sorpresa:{" "}
              {e.sorpresa} - Comentario: {e.comentario}
            </div>
          ))}
          {/* {
                  <FullCalendar
                    plugins={[
                      dayGridMonth,
                      timeGridPlugin,
                      interactionPlugin,
                      googleCalendarPlugin,
                      listPlugin,
                    ]}
                    headerToolbar={{
                      left: "prev,next today",
                      center: "title",
                      right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
                    }}
                    initialView="listWeek"
                    selectable={true}
                    editable={true}
                    eventClick={closeModal}
                    events={logEvents}
                    height="100%"
                    // width="100%"
                    weekends={false}
                    slotMinTime="09:00:00"
                    slotMaxTime="19:00:00"
                  />
                } */}
        </div>
      </div>
    </div>
  );
};

export default MockLog;
