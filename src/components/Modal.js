import React from "react";
import "./css-folder/Modal.css";

const Modal = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal_content">
        <div className="modal_header">
          <h2 className="modal_title">{props.title}</h2>
        </div>
        <div className="modal_body">
          <p>
            {" "}
            <strong>Descrizione:</strong>{" "}
            {props.description
              ? props.description.slice(0, 350)
              : "Descrizione non presente"}
            ...
          </p>
          <p>
            <strong>Autore: </strong>{" "}
            {props.author ? props.author : "Autore non presente"}
          </p>
          <p>
            <strong>Data di rilascio: </strong>{" "}
            {props.publishedDate
              ? props.publishedDate
              : "Data di rilascio non presente"}
          </p>
          <p>
            <strong>Pagine: </strong>
            {props.pages ? props.pages : "Numero pagine non presente"}
          </p>
        </div>
        <div className="modal-footer">
          <button onClick={props.onClose} className="btn btn-danger">
            Chiudi
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
