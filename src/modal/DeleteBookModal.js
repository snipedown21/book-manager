import React from 'react';
import { Input, Modal, message } from 'antd';
import _ from 'lodash';
import Axios from 'axios';

class DeleteBookModal extends React.Component {
  handleDelete = () => {
    Axios.delete(`http://win10d-02323:4000/book`, { data: { id: this.props.id }})
    .then((res) => {
      message.success(`${res.data}`);
      _.remove(this.props.books, item => item.key === this.props.id );
      this.props.handleCancel();
      }
    );
  }

  render() {
    return(
      <Modal
          title="Delete this book"
          visible={this.props.visible}
          okText="Delete"
          onOk={this.handleDelete}
          okButtonProps={{ disabled: !(this.props.inputName === this.props.verifiedName), type: 'danger', ghost: true }}
          onCancel={this.props.handleCancel}
        >
        <Input
          placeholder="Verify Book Name"
          value={this.props.inputName}
          onChange={(event) => this.props.handleInput('inputName', event)} />
        </Modal>
    );
  }
}

export default DeleteBookModal;
