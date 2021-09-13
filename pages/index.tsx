import {Layout} from 'antd';
import React from 'react';
import Banner from '../components/home/Banner';
import DataProvidersSection from '../components/home/DataProvidersSection';
import DomainDisplay from '../components/home/DomainDisplay';
import Jumbotron from '../components/home/Jumbotron';
import ToolsSection from '../components/home/ToolsSection';

const Home = () => {
  return (
    <Layout
      className="min-h-screen container mx-auto"
      style={{background: '#fff'}}
    >
      <span className="bg-agriculture bg-forestry bg-zoning bg-infrastructure" />
      <Jumbotron />
      <Banner />
      <ToolsSection />
      <DomainDisplay />
    </Layout>
  );
};

export default Home;
