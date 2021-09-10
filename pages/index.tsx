import {Layout} from 'antd';
import React from 'react';
import DomainDisplay from '../components/home/DomainDisplay';
import DomainSection from '../components/home/DomainSection';
import Jumbotron from '../components/home/Jumbotron';
import {DOMAINS, DOMAINS_MAP} from '../constants/datasets';

const Home = () => {
  const forestryDomain = DOMAINS_MAP.get('forestry');

  return (
    <Layout
      className="min-h-screen container mx-auto"
      style={{background: '#fff'}}
    >
      <Jumbotron />
      <DomainDisplay />

      <DomainSection
        title={forestryDomain.title}
        key={forestryDomain.id}
        datasets={forestryDomain.datasets}
        subtitle={forestryDomain.description}
      />
    </Layout>
  );
};

export default Home;
