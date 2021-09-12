import React from 'react';
import {Dataset} from '../../types';

interface DatasetTextDescriptionComponentProps {
  dataset: Dataset;
}

const DatasetTextDescription = (
  props: DatasetTextDescriptionComponentProps
) => {
  const {
    dataset: {summary},
  } = props;

  return (
    <>
      <h1>Summary</h1>
      {summary.map((str, idx) => (
        <p className="text-sm leading-loose font-light" key={idx}>
          {str}
        </p>
      ))}
    </>
  );
};

export default DatasetTextDescription;
