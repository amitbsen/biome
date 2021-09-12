import {Layout} from 'antd';
import dynamic from 'next/dynamic';
import React from 'react';
import ExploreMenuContainer from '../components/explore/ExploreMenuContainer';

const ExploreMapWithNoSSR = dynamic(
  () => import('../components/explore/ExploreMap'),
  {
    ssr: false,
  }
);

const {Sider, Content} = Layout;

const Explore = () => {
  return (
    <Layout className="min-h-screen">
      <Sider width={400}>
        <ExploreMenuContainer />
      </Sider>
      <Content>
        <ExploreMapWithNoSSR />
      </Content>
    </Layout>
  );
};

export default Explore;
