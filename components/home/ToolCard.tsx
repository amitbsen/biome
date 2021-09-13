import {ArrowRightOutlined} from '@ant-design/icons';
import {Card} from 'antd';
import React from 'react';
import Link from 'next/link';
import {Button} from 'antd';

interface ToolCardComponentProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const {Meta} = Card;

const ToolCard = (props: ToolCardComponentProps) => {
  const {title, description, image, link} = props;

  return (
    <Card className="rounded" cover={<img alt={title} src={image} />}>
      <Meta title={title} description={description} />
      <div className="flex justify-center">
        <Link href={link}>
          <Button className="mt-6 w-full" size="large" type={'primary'}>
            <span className="text-white font-semibold">
              Get Started <ArrowRightOutlined />
            </span>
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default ToolCard;
