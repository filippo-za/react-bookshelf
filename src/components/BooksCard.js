import React from "react";
import { useState } from "react";
import "./css-folder/BooksCard.css";
import Modal from "./Modal";

const BooksCard = (props) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="container_card">
        <img className="container_img" src={props.img}></img>
        <div className="container_card_info">
          <p className="info_title">
            <strong>Titolo: </strong>
            {props.title.slice(0, 60)}...
          </p>
          <p className="into_author">
            <strong>Autore: </strong>
            {props.author ? props.author : "Autore non presente"}
          </p>
          <div className="container_card_info_btn ">
            <button
              onClick={() => setShow(true)}
              className="btn btn-primary btn_primary"
            >
              Dettagli
            </button>
            <Modal
              onClose={() => setShow(false)}
              show={show}
              title={props.title}
              author={props.author}
              description={props.description}
              publishedDate={props.publishedDate}
              pages={props.pages}
            />
            <button className="btn btn-secondary info_btn">
              <a className="info_btn_link" href={props.preview}>
                Preview
              </a>{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BooksCard;
