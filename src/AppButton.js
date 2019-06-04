import React from 'react';
import { Button } from 'antd';

const AppButton = (props) => {
  return (
    <Button className={props.className}
            shape={props.shape}
            style={{ borderColor: props.borderColor, borderWidth: '3px', height: props.height, width: props.width }}
            onClick={props.onClick}
    >
    {props.children}
    </Button>
  );
};

export default AppButton;
