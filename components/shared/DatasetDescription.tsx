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
      <div style={{height: 400}} className="mb-5">
        <EsriMapWithNoSSR dataset={dataset} />
      </div>
      <DatasetTextDescription dataset={dataset} />
    </>
  );
};

export default DatasetDescription;
