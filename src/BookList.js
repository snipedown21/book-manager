import React from 'react';
import BookItem  from './BookItem';
import { connect } from 'react-redux';
import { List } from 'antd';
import Axios from 'axios';
import './BookList.css';

class BookList extends React.Component {

    state = {
      books: [],
    };

  componentDidMount() {
    Axios.get('http://win10d-02323:4000/books').then(res =>
      this.setState({ books: res.data })
    );
  }

  render() {
    return (
      <div className="book-list-container">
      <List
      header={<h2 className="library-header"><i>My Library</i></h2>}
      dataSource={this.state.books.filter(item =>item.name.toLowerCase().includes(this.props.searchTerm.toLowerCase()))}
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

const mapStateToProps = state => {
  return {
    searchTerm: state.searchTerm,
  }
};

export default connect(mapStateToProps, null)(BookList);
