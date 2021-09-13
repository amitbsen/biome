import React from 'react';
import {Radio} from 'antd';
import {selectedBiomassVar} from '../../data/cache';

const {Group, Button} = Radio;

const BiomassSelector = () => {
  return (
    <div className="mt-16">
      <Group
        defaultValue="maize"
        className="w-full"
        onChange={val => {
          selectedBiomassVar(val.target.value);
        }}
      >
        <Button
          value="maize"
          className="w-1/3"
          style={{height: 250, padding: 40}}
        >
          <h1 className="font-light text-4xl mb-1">Maize</h1>
          <p className="mt-3 text-gray-400 font-light text-base">
            Maize grain makes a good biofuel feedstock due to its starch content
            and its comparatively easy conversion to ethanol.
          </p>
        </Button>
        <Button
          value="sorghum"
          className="w-1/3"
          style={{height: 250, padding: 40}}
        >
          <h1 className="font-light text-4xl mb-1">Sorghum</h1>
          <p className="mt-3 text-gray-400 font-light text-base">
            Sorghum (Sorghum bicolor) is used for biomass energy and its high
            sugar content allows it to be fermented to make ethanol.
          </p>
        </Button>
        <Button
          value="rice"
          className="w-1/3"
          style={{height: 250, padding: 40}}
        >
          <h1 className="font-light text-4xl mb-1">Rice</h1>
          <p className="mt-3 text-gray-400 font-light text-base">
            The cultivation of rice results in two types of biomass residues –
            straw and husk – having attractive potential in terms of energy.
          </p>
        </Button>
      </Group>
    </div>
  );
};

export default BiomassSelector;
