import React from 'react';
import { Input, Modal, message } from 'antd';
import Axios from 'axios';

class AddNewBookModal extends React.Component {

  handleSave = () => {
    Axios.post(`http://win10d-02323:4000/book/new`, { name: this.props.name, bookmark: this.props.bookmark })
    .then((res) => {
      message.success(`${res.data.result}`);
      this.props.handleCancel();
    });
  }

  render() {
    return (
      <Modal title="Add New Book" visible={this.props.visible} okText="Save" onOk={this.handleSave} onCancel={this.props.handleCancel}>
        <Input placeholder="Book Name" value={this.props.name} onChange={(e) => this.props.handleInput('name', e.target.value)} />
        <Input placeholder="Bookmark" value={this.props.bookmark} onChange={(e) => this.props.handleInput('bookmark', e.target.value)} />
      </Modal>
    );
  }
}

export default AddNewBookModal;
