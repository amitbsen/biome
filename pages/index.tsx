import {Layout} from 'antd';
import React from 'react';
import Banner from '../components/home/Banner';
import DataProvidersSection from '../components/home/DataProvidersSection';
import DomainDisplay from '../components/home/DomainDisplay';
import DomainSection from '../components/home/DomainSection';
import Jumbotron from '../components/home/Jumbotron';
import ToolsSection from '../components/home/ToolsSection';
import {DOMAINS_MAP} from '../constants/datasets';

const Home = () => {
  const forestryDomain = DOMAINS_MAP.get('forestry');
  const agDomain = DOMAINS_MAP.get('agriculture');
  const infraDomain = DOMAINS_MAP.get('infrastructure');
  const peopleDomain = DOMAINS_MAP.get('people');

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

      <ToolsSection />

      <DomainSection
        title={agDomain.title}
        key={agDomain.id}
        datasets={agDomain.datasets}
        subtitle={agDomain.description}
      />

      <DataProvidersSection />

      <DomainSection
        title={infraDomain.title}
        key={infraDomain.id}
        datasets={infraDomain.datasets}
        subtitle={infraDomain.description}
      />

      <Banner />

      <DomainSection
        title={peopleDomain.title}
        key={peopleDomain.id}
        datasets={peopleDomain.datasets}
        subtitle={peopleDomain.description}
      />
    </Layout>
  );
};

export default Home;
