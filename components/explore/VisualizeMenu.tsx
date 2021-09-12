import {Tabs} from 'antd';
import React from 'react';
import {DATASETS, DOMAINS} from '../../constants/datasets';
import SectionHeader from '../shared/SectionHeader';
import BackButton from './BackButton';
import LayerCard from './LayerCard';

interface VisualizeMenuComponentProps {
  goBack: () => void;
}

const {TabPane} = Tabs;

const VisualizeMenu = (props: VisualizeMenuComponentProps) => {
  const {goBack} = props;

  return (
    <div className="pt-5 flex flex-col">
      <div className="mb-4">
        <BackButton goBack={goBack} />
      </div>
      <SectionHeader
        title="Visualize"
        subtitle="Visualize different combinations of datasets together in the same map."
      />

      <div className="flex-grow">
        <Tabs className="max-h-full overflow-auto">
          <TabPane
            tab={'All'}
            className="overflow-auto"
            style={{maxHeight: '50vh'}}
          >
            <div className="grid gap-3">
              {DATASETS.map((dataset, idx) => (
                <LayerCard key={idx} dataset={dataset} />
              ))}
            </div>
          </TabPane>

          {DOMAINS.map(({id, title, datasets}) => (
            <TabPane tab={title} key={id}>
              <div className="grid gap-3">
                {datasets.map((dataset, idx) => (
                  <LayerCard key={idx} dataset={dataset} />
                ))}
              </div>
            </TabPane>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default VisualizeMenu;
