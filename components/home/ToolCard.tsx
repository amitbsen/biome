import {Card} from 'antd';
import React from 'react';

interface ToolCardComponentProps {
  title: string;
  description: string;
}

const {Meta} = Card;

const ToolCard = (props: ToolCardComponentProps) => {
  const {title, description} = props;

  return (
    <Card
      className="rounded"
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
    >
      <Meta title={title} description={description} />
    </Card>
  );
};

export default ToolCard;
