import React from "react";
import "./css-folder/BooksList.css";

import BookCard from "./BooksCard";

const BooksList = (props) => {
  return (
    <>
      <div className="list_container">
        {props.books.items.map((book, index) => {
          const img = `http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`;
          return (
            <BookCard
              key={index}
              id={book.id}
              img={img}
              title={book.volumeInfo.title}
              author={book.volumeInfo.authors}
              preview={book.volumeInfo.infoLink}
              description={book.volumeInfo.description}
              publishedData={book.volumeInfo.publishedDate}
              pages={book.volumeInfo.pageCount}
            />
          );
        })}
      </div>
    </>
  );
};

export default BooksList;
