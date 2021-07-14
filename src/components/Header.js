import React from "react";
import "./css-folder/Header.css";

const Header = (props) => {
  return (
    <>
      <div className="container_header">
        <div className="section">
          <div className="container_title">
            <h3 className="title">Cerca il tuo libro</h3>
          </div>
          <form onSubmit={props.callBooks} className="form_header">
            <input
              className="input_header"
              type="text"
              placeholder="Cerca libro"
              onChange={props.handleSearch}
            ></input>
            <button className="btn_header mt-2">Cerca</button>
          </form>
        </div>
      </div>
      <div style={props.visible} className="container text-center">
        <i className="fas fa-search fa-4x icon"></i>
      </div>
    </>
  );
};

export default Header;
