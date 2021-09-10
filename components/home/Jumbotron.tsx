import {Button} from 'antd';
import React from 'react';

const Jumbotron = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-800 rounded px-16 py-16 my-8">
      <h1 className="text-5xl text-white font-semibold pb-0 mb-3">
        Cameroon for the Future
      </h1>
      <h2 className="text-2xl text-white font-light">Explore the data</h2>
      <Button>Explore the data</Button>
    </div>
  );
};

export default Jumbotron;
