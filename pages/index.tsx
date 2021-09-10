import {Layout} from 'antd';
import React from 'react';
import DomainDisplay from '../components/home/DomainDisplay';
import DomainSection from '../components/home/DomainSection';
import Jumbotron from '../components/home/Jumbotron';
import {DOMAINS} from '../constants/datasets';

const Home = () => {
  return (
    <Layout
      className="min-h-screen container mx-auto"
      style={{background: '#fff'}}
    >
      <Jumbotron />
      <DomainDisplay />

      {DOMAINS.map(({id, title, datasets}) => {
        return <DomainSection title={title} key={id} datasets={datasets} />;
      })}
    </Layout>
  );
};

export default Home;
