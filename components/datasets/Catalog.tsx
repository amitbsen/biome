import {Tabs} from 'antd';
import React from 'react';
import {DATASETS, DOMAINS} from '../../constants/datasets';
import CatalogTile from './CatalogTile';

const {TabPane} = Tabs;

const Catalog = () => {
  return (
    <Tabs centered style={{borderBottom: 0, marginBottom: 30}}>
      <TabPane tab={'All'}>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3">
          {DATASETS.map(dataset => (
            <CatalogTile title={dataset.title} dataset={dataset} />
          ))}
        </div>
      </TabPane>

      {DOMAINS.map(({id, title, datasets}) => (
        <TabPane tab={title} key={id}>
          <div className="grid grid-cols-4 gap-3">
            {datasets.map(dataset => (
              <CatalogTile title={dataset.title} dataset={dataset} />
            ))}
          </div>
        </TabPane>
      ))}
    </Tabs>
  );
};

export default Catalog;
