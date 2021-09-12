import React from 'react';
import {Dataset} from '../../types';
import dynamic from 'next/dynamic';

const EsriMapWithNoSSR = dynamic(() => import('./DatasetMap'), {
  ssr: false,
});

interface DatasetDescriptionComponentProps {
  dataset: Dataset;
}

const DatasetDescription = (props: DatasetDescriptionComponentProps) => {
  const {
    dataset: {summary},
  } = props;

  return (
    <>
      {summary.map((str, idx) => (
        <p key={idx}>{str}</p>
      ))}
      <div className="h-screen">
        <EsriMapWithNoSSR layerUrl="" />
      </div>
    </>
  );
};

export default DatasetDescription;
