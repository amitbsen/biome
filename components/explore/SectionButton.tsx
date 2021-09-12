import React from 'react';
import Separator from '../shared/Separator';
import {RightOutlined} from '@ant-design/icons';

interface SectionButtonComponentProps {
  title: string;
  subtitle: string;
  handleClick: () => void;
  color: string;
}

const SectionButton = (props: SectionButtonComponentProps) => {
  const {title, subtitle, handleClick, color} = props;
  return (
    <div
      className={`border rounded px-5 pt-8 pb-10 mb-3 cursor-pointer transition-all duration-200 ${
        color === 'blue'
          ? 'bg-blue-500 hover:bg-blue-600'
          : 'bg-green-400 hover:bg-green-600'
      }`}
      onClick={handleClick}
    >
      <div>
        <h2 className="text-2xl text-white font-semibold mb-1">{title}</h2>
        <p className={`text-base font-light text-white mb-6`}>{subtitle}</p>
      </div>

      <span
        className={`text-white text-sm border-2 px-4 py-1 border-white hover:bg-white transition-all duration-200 ${
          color === 'blue' ? 'hover:text-blue-500' : 'hover:text-green-500'
        }`}
      >
        {title}
        <RightOutlined style={{fontSize: 13}} className="ml-1" />
      </span>
    </div>
  );
};

export default SectionButton;
