import {Layout} from 'antd';
import React from 'react';
import JazzFooter from './JazzFooter';
import JazzHeader from './JazzHeader';

const {Content} = Layout;

const JazzLayout: React.FunctionComponent = props => {
  const {children} = props;
  return (
    <Layout>
      <JazzHeader />
      <Content>{children}</Content>
      <JazzFooter />
    </Layout>
  );
};

export default JazzLayout;
