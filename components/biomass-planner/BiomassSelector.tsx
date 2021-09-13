import React from 'react';
import {Radio} from 'antd';

const {Group, Button} = Radio;

const BiomassSelector = () => {
  return (
    <div className="mt-16">
      <Group defaultValue="maize" className="w-full">
        <Button
          value="maize"
          className="w-1/3"
          style={{height: 200, padding: 40}}
        >
          <h1 className="font-light text-4xl mb-1">Maize</h1>
          <p className="text-gray-400 font-light text-base">
            Some description goes here
          </p>
        </Button>
        <Button
          value="sorghum"
          className="w-1/3"
          style={{height: 200, padding: 40}}
        >
          <h1 className="font-light text-4xl mb-1">Sorghum</h1>
          <p className="text-gray-400 font-light text-base">
            Some description goes here
          </p>
        </Button>
        <Button
          value="rice"
          className="w-1/3"
          style={{height: 200, padding: 40}}
        >
          <h1 className="font-light text-4xl mb-1">Rice</h1>
          <p className="text-gray-400 font-light text-base">
            Some description goes here
          </p>
        </Button>
      </Group>
    </div>
  );
};

export default BiomassSelector;
