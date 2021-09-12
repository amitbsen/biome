import {Card, Tabs} from 'antd';
import React from 'react';
import {DATASETS, DOMAINS} from '../../constants/datasets';
import CatalogTile from './CatalogTile';

const {TabPane} = Tabs;
const {Meta} = Card;

const Catalog = () => {
  return (
    <Tabs centered style={{borderBottom: 0}}>
      <TabPane tab={'All'}>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {DATASETS.map(({title}) => (
            <CatalogTile title={title} />
          ))}
        </div>
      </TabPane>

      {DOMAINS.map(({id, title, datasets}) => (
        <TabPane tab={title} key={id}>
          <div className="grid grid-cols-5 gap-3">
            {datasets.map(({title}) => (
              <CatalogTile title={title} />
            ))}
          </div>
        </TabPane>
      ))}
    </Tabs>
  );
};

export default Catalog;
