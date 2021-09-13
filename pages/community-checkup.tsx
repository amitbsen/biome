import {Layout} from 'antd';
import dynamic from 'next/dynamic';
import React from 'react';
import CheckupHeader from '../components/community-checkup/CheckupHeader';
import CheckupResults from '../components/community-checkup/CheckupResults';
import CommunitySelector from '../components/community-checkup/CommunitySelector';
const CheckupResultsWithNoSSR = dynamic(
  () => import('../components/community-checkup/CheckupResults'),
  {
    ssr: false,
  }
);

const CommunityCheckup = () => {
  return (
    <Layout className="container mx-auto">
      <CheckupHeader />
      <CommunitySelector />
      <CheckupResultsWithNoSSR />
    </Layout>
  );
};

export default CommunityCheckup;
