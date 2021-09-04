import React from 'react';
import {Button, Layout} from 'antd';

const {Header, Content} = Layout;

const Home = () => (
  <Layout>
    <Header>
      <div className="mx-auto container flex items-center h-full">
        <h1 className="font-semibold text-xl mb-0 leadi">pitbull</h1>
      </div>
    </Header>
    <Content style={{padding: '0 50px'}}>
      <Button type="primary">Test</Button>
    </Content>
  </Layout>
);

export default Home;
