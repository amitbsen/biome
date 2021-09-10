import {Collapse} from 'antd';
import React from 'react';
import dynamic from 'next/dynamic';

const EsriMapWithNoSSR = dynamic(() => import('./DatasetMap'), {
  ssr: false,
});

const {Panel} = Collapse;

interface DatasetPanelComponentProps {
  header: React.ReactNode;
}

const DatasetPanel = (props: DatasetPanelComponentProps) => {
  const {header} = props;

  return (
    <div className="mb-2">
      <Collapse>
        <Panel header={header} key={`${Math.random()}`}>
          <p>Test</p>
          <div className="h-screen">
            <EsriMapWithNoSSR layerUrl="" />
          </div>
        </Panel>
      </Collapse>
    </div>
  );
};

export default DatasetPanel;
