import React from 'react';
import {Dataset} from '../../types';
import dynamic from 'next/dynamic';
import DatasetTextDescription from './DatasetTextDescription';

const EsriMapWithNoSSR = dynamic(() => import('./DatasetMap'), {
  ssr: false,
});

interface DatasetDescriptionComponentProps {
  dataset: Dataset;
}

const DatasetDescription = (props: DatasetDescriptionComponentProps) => {
  const {dataset} = props;

  return (
    <>
      <DatasetTextDescription dataset={dataset} />
      <div className="h-screen">
        <EsriMapWithNoSSR layerUrl="" />
      </div>
    </>
  );
};

export default DatasetDescription;
