import {Layout} from 'antd';
import React from 'react';
import DatasetsHeader from '../components/datasets/DatasetsHeader';

const Datasets = () => {
  return (
    <Layout
      className="min-h-screen container mx-auto"
      style={{background: '#fff'}}
    >
      <DatasetsHeader />
    </Layout>
  );
};

export default Datasets;
