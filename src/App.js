import React, { Component } from "react";

import Books from "./components/Books";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export class App extends Component {
  render() {
    return (
      <>
        <div>
          <Navbar />
          <Books />
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
