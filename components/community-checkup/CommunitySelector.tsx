import {ArrowRightOutlined} from '@ant-design/icons';
import {AutoComplete, Button, Checkbox} from 'antd';
import React from 'react';
import CommunityCheckupMap from './CommunityCheckupMap';

const CommunitySelector = () => {
  return (
    <section className="grid grid-cols-3 mt-8 gap-3">
      <div className="border rounded px-8 pt-12 pb-24">
        <h1 className="font-normal text-xl mb-1">Check Up On a Community</h1>
        <p className=" text-base text-gray-400 font-light mb-10">
          We'll take look into the health and growth of a community by
          extracting some of the information from our datasets.
        </p>
        <AutoComplete
          placeholder="Select a community"
          className="w-full"
          size="large"
        />
        <div className="mt-4">
          <Checkbox className="mt-2">
            <span className="text-gray-400">Use geoenriched data</span>
          </Checkbox>
        </div>

        <Button className="w-full mt-8" type="primary" size="large">
          <span className="text-white font-semibold">
            Start Analysis <ArrowRightOutlined />
          </span>
        </Button>
      </div>
      <div className="col-span-2 bg-blue-200">
        <CommunityCheckupMap />
      </div>
    </section>
  );
};

export default CommunitySelector;
