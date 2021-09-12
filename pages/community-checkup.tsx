import {Layout} from 'antd';
import React from 'react';
import CheckupHeader from '../components/community-checkup/CheckupHeader';
import CheckupResults from '../components/community-checkup/CheckupResults';
import CommunitySelector from '../components/community-checkup/CommunitySelector';

const Explore = () => {
  return (
    <Layout className="container mx-auto">
      <CheckupHeader />
      <CommunitySelector />
      <CheckupResults />
    </Layout>
  );
};

export default Explore;
