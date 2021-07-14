import React, { Component } from "react";

import Header from "./Header";
import BookList from "./BooksList";

export class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "Business",
      books: { items: [] },
      visible: { display: "block" },
    };
  }

  callBooks = () => {
    const API = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchInput}`;
    fetch(API)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ books: response });
        console.log(`Dati ${JSON.stringify(this.state.books)}`);
      });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.callBooks();
    this.setState({
      visible: { display: "none" },
    });
  };

  handleSearch = (e) => {
    this.setState({ searchInput: e.target.value });
  };

  render() {
    return (
      <>
        <div>
          <Header
            callBooks={this.handleSubmit}
            handleSearch={this.handleSearch}
            visible={this.state.visible}
          />
          <BookList books={this.state.books} />
        </div>
      </>
    );
  }
}

export default Books;
