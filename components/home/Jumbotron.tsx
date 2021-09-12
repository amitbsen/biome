import {Button} from 'antd';
import React from 'react';

const Jumbotron = () => {
  return (
    <div className="bg-cameroon-banner bg-cover bg-center rounded px-16 py-16 my-8">
      <h1 className="text-5xl text-white font-semibold pb-0 mb-3 leading-tight max-w-lg">
        A Sustainable Path for the Future of Cameroon
      </h1>
      <h2 className="text-2xl text-white font-light max-w-lg">
        Ohma's catalog of datasets and tools empowers policy-makers and
        businesses to make decisions on sustainability that matter the most.
      </h2>
      <Button>Explore the data</Button>
    </div>
  );
};

export default Jumbotron;
