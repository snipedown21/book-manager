import React from 'react';
import BookList from './BookList';
import SearchBar from './SearchBar';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SearchBar />
        <BookList />
      </React.Fragment>
    );
  }
}

export default App;
