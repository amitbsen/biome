import {Layout} from 'antd';
import React from 'react';
import BiomassHeader from '../components/biomass-planner/BiomassHeader';
import StepsContainer from '../components/biomass-planner/StepsContainer';

const BiomassPlanner = () => {
  return (
    <Layout className="container mx-auto">
      <BiomassHeader />
      <StepsContainer />
    </Layout>
  );
};

export default BiomassPlanner;
