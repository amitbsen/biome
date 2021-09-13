import {Button, Steps} from 'antd';
import React, {useState} from 'react';
import BiomassSelector from './BiomassSelector';
import CandidateSelection from './CandidateSelection';
import DeliverySelection from './DeliverySelection';

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
      {currStep === 0 ? <BiomassSelector /> : null}
      {currStep === 1 ? <CandidateSelection /> : null}
      {currStep === 2 ? <DeliverySelection /> : null}
      {}
      <div className="flex justify-between mt-8">
        <div>
          {currStep !== 0 ? (
            <Button onClick={prev}>Previous Step</Button>
          ) : null}
        </div>
        <div>
          {currStep !== 3 ? (
            <Button type="primary" className="text-white" onClick={next}>
              <span className="text-white">Next Step</span>
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default StepsContainer;
