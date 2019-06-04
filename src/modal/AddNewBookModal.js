import React from 'react';
import { Input, Modal, message } from 'antd';
import Axios from 'axios';

class AddNewBookModal extends React.Component {
  state = {
    name: '',
    bookmark: '',
  };

  handleInput = (prop, value) => {
    this.setState({ [prop]: value });
  }

  handleSave = () => {
    Axios.post(`http://win10d-02323:4000/book/new`, { name: this.state.name, bookmark: this.state.bookmark })
    .then((res) => {
      message.success(`${res.data.result}`);
      this.props.handleCancel();
      this.setState({ name: '', bookmark: '' });
    });
  }

  render() {
    return (
      <Modal title="Add New Book" visible={this.props.visible} okText="Save" onOk={this.handleSave} onCancel={this.props.handleCancel}>
        <Input placeholder="Book Name" onChange={(e) => this.handleInput('name', e.target.value)} />
        <Input placeholder="Bookmark" onChange={(e) => this.handleInput('bookmark', e.target.value)} />
      </Modal>
    );
  }
}

export default AddNewBookModal;
