import {Button} from 'antd';
import React from 'react';
import Link from 'next/link';
import {ArrowRightOutlined} from '@ant-design/icons';

const Jumbotron = () => {
  return (
    <div className="bg-cameroon-banner bg-cover bg-center rounded px-16 py-16 my-8">
      <h1 className="text-5xl text-white font-semibold pb-0 mb-3 leading-tight max-w-lg">
        A Sustainable Path for the Future of Cameroon
      </h1>
      <h2 className="text-2xl text-white font-light max-w-lg mb-10">
        Biome's catalog of datasets and tools empowers policy-makers and
        businesses to make the move towards renewable, carbon-neutral biofuels
        easier.
      </h2>
      <Link href="/explore">
        <span className="cursor-pointer transition-all duration-200 hover:bg-white hover:text-green-400 text-white border-2 border-white px-8 py-3 text-lg mt-6">
          Explore the Data
          <ArrowRightOutlined className="ml-4" />
        </span>
      </Link>
    </div>
  );
};

export default Jumbotron;
