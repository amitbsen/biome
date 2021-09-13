import {Steps} from 'antd';
import React, {useState} from 'react';

const {Step} = Steps;
const steps = [
  {title: 'Biomass Selection', description: 'Choose the biomass that'},
  {
    title: 'Candidate Locations',
    description: 'Select the candidate locations ',
  },
  {title: 'Distance to Export', description: ''},
  {title: 'Results', description: ''},
];

const StepsContainer = () => {
  const [currStep, setCurrStep] = useState(0);

  const next = () => {
    setCurrStep(currStep + 1);
  };

  const prev = () => {
    setCurrStep(currStep - 1);
  };

  return (
    <div className="mt-8">
      <Steps current={currStep} className="">
        {steps.map(({title, description}, idx) => (
          <Step key={idx} title={title} description={description} />
        ))}
      </Steps>
    </div>
  );
};

export default StepsContainer;
