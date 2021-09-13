import {ArrowLeftOutlined} from '@ant-design/icons';
import {Button} from 'antd';
import React from 'react';

interface BackButtonComponentProps {
  goBack: () => void;
}

const BackButton = (props: BackButtonComponentProps) => {
  const {goBack} = props;

  return (
    <Button size="large" style={{paddingLeft: 0}} onClick={goBack} type="text">
      <ArrowLeftOutlined /> Back
    </Button>
  );
};

export default BackButton;
