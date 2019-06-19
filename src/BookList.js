import React from 'react';
import BookItem  from './BookItem';
import EditBookModal from './modal/EditBookModal';
import DeleteBookModal from './modal/DeleteBookModal';
import { connect } from 'react-redux';
import { List } from 'antd';
import Axios from 'axios';
import './BookList.css';

class BookList extends React.Component {
    state = {
      books: [],
      editVisible: false,
      deleteVisible: false,
      verifiedName: '',
      id: '',
      name: '',
      bookmark: '',
      visible: false,
    };

    handleInput = (prop, event) => {
      const { value } = event.target;
      this.setState({ [prop]: value });
    };

    handleEditDialog = (e, id ,name, bookmark) => {
      this.setState({ editVisible: true, id, name, bookmark });
    };

    handleDeleteDialog = (e, id, name) => {
      this.setState({ deleteVisible: true, id, verifiedName: name });
    }

    handleCancel = () => {
      this.setState({
        editVisible: false,
        deleteVisible: false,
        verifiedName: '',
        id: '',
        name: '',
        bookmark: '',
      });
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
        id={item.key}
        name={item.name}
        bookmark={item.bookmark}
        handleEditDialog={this.handleEditDialog}
        handleDeleteDialog={this.handleDeleteDialog}
        />}
      >
      </List>
      <EditBookModal
        visible={this.state.editVisible}
        id={this.state.id}
        name={this.state.name}
        bookmark={this.state.bookmark}
        handleInput={this.handleInput}
        handleCancel={this.handleCancel}
      />
      <DeleteBookModal
        visible={this.state.deleteVisible}
        id={this.state.id}
        inputName={this.state.inputName}
        verifiedName={this.state.verifiedName}
        books={this.state.books}
        handleInput={this.handleInput}
        handleCancel={this.handleCancel} />
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
