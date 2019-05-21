import React from 'react';
import { Input } from 'antd';
import './SearchBar.css';

const Searchbar = Input.Search;

class SearchBar extends React.Component {
  render() {
    return (
      <Searchbar
        className="search-bar"
        placeholder="Search a book"
        style={{ width: '50%' }}
      />
    );
  }
}

export default SearchBar;
