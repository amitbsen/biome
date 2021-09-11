import {Menu} from 'antd';
import {Header} from 'antd/lib/layout/layout';
import {useRouter} from 'next/router';
import React from 'react';

const {Item} = Menu;

const JazzHeader = () => {
  const router = useRouter();
  const {pathname} = router;

  const handleSelect = ({key}) => {
    router.push(key);
  };

  return (
    <Header className="flex justify-between">
      <Menu
        onSelect={handleSelect}
        mode="horizontal"
        style={{borderBottom: 0}}
        selectedKeys={[pathname]}
      >
        <Item key="/">Home</Item>
        <Item key="/datasets">Dataset Catalog</Item>
      </Menu>

      <Menu
        onSelect={handleSelect}
        mode="horizontal"
        style={{borderBottom: 0}}
        selectedKeys={[pathname]}
      >
        <Item key="/explore">Explorer</Item>
        <Item key="/biomass-planner">Biomass Planner</Item>
        <Item key="/impact-assessment">Impact Assessment</Item>
      </Menu>
    </Header>
  );
};

export default JazzHeader;
