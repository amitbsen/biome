import {CgTrees} from 'react-icons/cg';
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
    <Header
      style={{paddingLeft: '1rem', paddingRight: '1rem'}}
      className="px-8 flex justify-between border border-t-0 border-l-0 border-r-0"
    >
      <div className="flex content-center">
        <CgTrees className="relative mt-4 text-green-400 text-3xl" />
        <h1 className="text-xl mt-4 ml-1 text-black font-bold">Biome</h1>
      </div>
      <div className="flex justify-between flex-grow">
        <Menu
          onSelect={handleSelect}
          mode="horizontal"
          style={{borderBottom: 0}}
          selectedKeys={[pathname]}
        >
          <Item></Item>
          <Item className="font-semibold" key="/">
            Home
          </Item>
          <Item className="font-semibold" key="/datasets">
            Dataset Catalog
          </Item>
        </Menu>

        <Menu
          onSelect={handleSelect}
          mode="horizontal"
          style={{borderBottom: 0}}
          selectedKeys={[pathname]}
        >
          <Item className="font-semibold" key="/explore">
            Explorer
          </Item>
          <Item className="font-semibold" key="/biomass-planner">
            Biomass Planner
          </Item>
          <Item className="font-semibold" key="/community-checkup">
            Community Checkup
          </Item>
        </Menu>
      </div>
    </Header>
  );
};

export default JazzHeader;
