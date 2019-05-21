import React from 'react';
import { List, Icon } from 'antd';
import 'antd/dist/antd.css';

const BookItem = (props) => {
  return (
    <List.Item actions={[<Icon type="edit" theme="twoTone" />, <Icon type="delete" theme="twoTone" />]}>
      <List.Item.Meta
        title={<div><b>{props.name}</b></div>}
      />
      <h4>Pg. {props.bookmark}</h4>
    </List.Item>
  );
};

export default BookItem;
