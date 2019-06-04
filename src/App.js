import React from 'react';
import BookList from './BookList';
import SearchBar from './SearchBar';
import AddNewButton from './AddNewButton';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SearchBar />
        <BookList />
        <AddNewButton />
      </React.Fragment>
    );
  }
}

export default App;
