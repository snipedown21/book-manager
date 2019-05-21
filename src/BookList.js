import React from 'react';
import BookItem  from './BookItem';

class BookList extends React.Component {
  render() {
    return (
      <div>
      <BookItem name="Harry Potter" bookmark="12" />
      <BookItem name="tintin" bookmark="104" />
      <BookItem name="sherlock holmes" bookmark="1042" />
      <BookItem name="war and peace" bookmark="132" />
      </div>
    );
  }
}

export default BookList;
