import {Layout} from 'antd';
import React from 'react';
import JazzFooter from './JazzFooter';
import JazzHeader from './JazzHeader';

const JazzLayout: React.FunctionComponent = props => {
  const {children} = props;
  return (
    <Layout>
      <JazzHeader />
      {children}
    </Layout>
  );
};

export default JazzLayout;
