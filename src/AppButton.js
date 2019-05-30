import React from 'react';
import { Button } from 'antd';

const AppButton = (props) => {
  return (
    <Button className={props.className}
            shape={props.shape}
            style={{ backgroundColor: props.backColor, borderWidth: '3px', height: props.height, width: props.width }}
    >
    </Button>
  );
};

export default AppButton;
