import React from 'react';
import AppButton from './AppButton';
import AddNewBookModal from './modal/AddNewBookModal';
import './AddNewButton.css';
import { Icon } from 'antd';

class AddNewButton extends React.Component {
  state = {
    visible: false,
    name: '',
    bookmark: '',
  };

  handleInput = (prop, value) => {
    this.setState({ [prop]: value });
  }

  handleNewBook = () => {
    this.setState({ visible: true });
  }

  handleCancel = () => {
    this.setState({ visible: false, name: '', bookmark: '' });
  }

  render() {
    return (
      <div>
      <AppButton
        className="add-new-button"
        shape="round"
        height="75px"
        width="200px"
        onClick={this.handleNewBook}
      >
        <Icon type="plus" />Add New Book
      </AppButton>
      <AddNewBookModal
        visible={this.state.visible}
        handleCancel={this.handleCancel}
        handleInput={this.handleInput}
        name={this.state.name}
        bookmark={this.state.bookmark}
      />
      </div>
    );
  }
}

export default AddNewButton;
