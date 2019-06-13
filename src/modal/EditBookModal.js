import React from 'react';
import { Modal, Input, message } from 'antd';
import Axios from 'axios';

class EditBookModal extends React.Component {

  handleUpdate = () => {
    Axios.put('http://win10d-02323:4000/book/update',
    {key: this.props.id, name: this.props.name, bookmark: this.props.bookmark })
    .then((res) => {
      message.success(`${res.data}`);
      this.props.handleCancel();
    });
  };

  render() {
    return (
      <Modal
        title="Edit book details"
        visible={this.props.visible}
        onOk={this.handleUpdate}
        onCancel={this.props.handleCancel}
      >
        <Input
          placeholder="Name"
          value={this.props.name}
          onChange={(event) => this.props.handleInput('name', event)}
        />
        <Input
          placeholder="Bookmark"
          value={this.props.bookmark}
          onChange={(event) => this.props.handleInput('bookmark', event)}
        />
      </Modal>
    );
  }
}

export default EditBookModal;
