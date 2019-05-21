import React from 'react';
import BookItem  from './BookItem';
import { List } from 'antd';
import './BookList.css';

const list = [
  {
  key: 1,
  name: 'Harry Potter',
  bookmark: '35',
  },
  {
    key: 2,
    name: 'Sherlock Holmes',
    bookmark: '99',
  },
  {
    key: 3,
    name: 'Tintin',
    bookmark: '35',
  },
  {
    key: 4,
    name: 'War and Peace',
    bookmark: '1042',
  },
  {
    key: 5,
    name: 'Popoye',
    bookmark: '10',
  },
  {
    key: 6,
    name: 'Wings of fire',
    bookmark: '25',
  },
  {
    key: 7,
    name: 'Inception',
    bookmark: '406',
  }
];

class BookList extends React.Component {
  render() {
    return (
      <div className="book-list-container">
      <List
      header={<h2 className="library-header"><i>My Library</i></h2>}
      dataSource={list}
      renderItem={item => <BookItem
        key={item.key}
        name={item.name}
        bookmark={item.bookmark}
        />}
      >
      </List>
      </div>
    );
  }
}

export default BookList;
