import FullCalendar from "@fullcalendar/react";
import dayGridMonth from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import listPlugin from "@fullcalendar/list";
import React from "react";
import "./Modal.css";
import CustomView from "./CustomPlugin";
import Table from "./Table/Table";

const Modal = ({ showModal, users, modalRef, closeModal }) => {
  // const logEvents = logInfo.map((e) => ({
  //   email: e.email,
  //   title: e.comentario,
  //   id: e.user_id,
  //   start: new Date(e.date).toISOString(),
  //   end: new Date(e.date).toISOString(),
  //   allDay: true,
  // }));

  // TODO ver de usar los metodos day de Date, para mostrar en una grid de semana
  return (
    <>
      {showModal && (
        <div className="cardDetail" ref={modalRef} onClick={closeModal}>
          <div className="modal">
            {/* {currentEvent[0].name ? (
              <div className="divModal">
                {currentEvent[0].name}
                <Table data={logInfo} />
              </div>
            ) : (
              alert("Falta invitar el usuario!")
            )} */}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
