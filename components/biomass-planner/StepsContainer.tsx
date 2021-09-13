import {Button, Steps} from 'antd';
import dynamic from 'next/dynamic';
import React, {useState} from 'react';
import BiomassSelector from './BiomassSelector';
import CandidateSelection from './CandidateSelection';
import DeliverySelection from './DeliverySelection';
import ResultsContainer from './ResultsContainer';

const {Step} = Steps;
const steps = [
  {title: 'Crop Selection', description: ''},
  {
    title: 'Candidate Harvest Areas',
    description: '',
  },
  {title: 'Biomass Processing Facilities', description: ''},
  {title: 'Results', description: ''},
];

const ResultsContainerWithNoSSR = dynamic(() => import('./ResultsContainer'), {
  ssr: false,
});

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
      {currStep === 3 ? <ResultsContainerWithNoSSR /> : null}
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
