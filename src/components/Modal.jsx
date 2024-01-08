import "./Modal.css";
import Table from "./Table/Table";

const Modal = ({ showModal, users, modalRef, closeModal, currentEvent, logInfo }) => {
  // const logEvents = logInfo.map((e) => ({
  //   email: e.email,
  //   title: e.comentario,
  //   id: e.user_id,
  //   start: new Date(e.date).toISOString(),
  //   end: new Date(e.date).toISOString(),
  //   allDay: true,
  // }));

  return (
    <>
      {showModal && (
        <div className="cardDetail" ref={modalRef} onClick={closeModal}>
          <div className="modal">
            {currentEvent[0] ? (
              <div className="divModal">
                {currentEvent[0]?.name}
                <Table data={logInfo} />
              </div>
            ) : (
              "Falta invitar el usuario!"
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
