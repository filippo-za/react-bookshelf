import React, { Component } from "react";

import "./css-folder/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar bg-dark bg-gradient">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 text-white me-5">
            <div className="navbar_link">📚 BOOKSHELF</div>
          </span>
        </div>
        <a className="container_google" href="https://books.google.it/">
          <i className="fab fa-google"></i>
        </a>
      </nav>
    );
  }
}

export default Navbar;
