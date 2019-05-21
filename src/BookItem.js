import React from 'react';

const BookItem = (props) => {
  return (<div>{props.name}, Pg. {props.bookmark}</div>);
};

export default BookItem;
