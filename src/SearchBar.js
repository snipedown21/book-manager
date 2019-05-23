import React from 'react';
import { connect } from 'react-redux';
import { setSearchTerm } from './actions';
import { Input } from 'antd';
import './SearchBar.css';

const Searchbar = Input.Search;

class SearchBar extends React.Component {
  setSearchTerm = (event) => {
    const { value } = event.target;
    this.props.setSearchTerm(value);
  };

  render() {
    return (
      <Searchbar
        className="search-bar"
        placeholder="Search a book"
        style={{ width: '50%' }}
        onChange={this.setSearchTerm}
      />
    );
  }
}

export default connect(null, { setSearchTerm })(SearchBar);
