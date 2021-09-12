import {Collapse} from 'antd';
import React from 'react';
import {Dataset} from '../../types';
import DatasetDescription from '../shared/DatasetDescription';

const {Panel} = Collapse;

interface DatasetPanelComponentProps {
  dataset: Dataset;
}

const DatasetPanel = (props: DatasetPanelComponentProps) => {
  const {dataset} = props;

  return (
    <div className="mb-2">
      <Collapse>
        <Panel header={dataset.title} key={`${Math.random()}`}>
          <DatasetDescription dataset={dataset} />
        </Panel>
      </Collapse>
    </div>
  );
};

export default DatasetPanel;
