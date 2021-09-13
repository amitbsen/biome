import {ArrowRightOutlined} from '@ant-design/icons';
import {Select, Button, Checkbox} from 'antd';
import axios from 'axios';
import dynamic from 'next/dynamic';
import React, {useCallback, useEffect, useState} from 'react';
import {selectedCommunityVar, useGeoenrichmentVar} from '../../data/cache';

const CheckupMapWithNoSSR = dynamic(
  () => import('../community-checkup/CommunityCheckupMap'),
  {
    ssr: false,
  }
);

interface Option {
  value: string;
  label: string;
}

const CommunitySelector = () => {
  const [communities, setCommunities] = useState<any[]>([]);
  const [options, setOptions] = useState<Option[]>([]);
  const [selectedCommunity, setSelectedCommunity] = useState<any | null>(null);

  useEffect(() => {
    axios
      .get(
        'https://services7.arcgis.com/xh0yVCnaOriDzPFY/ArcGIS/rest/services/Cameroon%20Admin%202%20Boundaries/FeatureServer/0/query',
        {
          params: {
            where: '1=1',
            f: 'json',
            outfields: '*',
          },
        }
      )
      .then(({data: {features}}) => {
        setCommunities(features);
      });
  }, []);

  useEffect(() => {
    if (communities.length > 0) {
      setOptions(
        communities.map(({attributes: {NAME_0, NAME_1, NAME_2, FID}}) => ({
          label: `${NAME_2}, ${NAME_1}, ${NAME_0}`,
          value: FID,
        }))
      );
    }
  }, [communities]);

  const handleStartAnalysis = useCallback(() => {
    const communityFID = parseInt(selectedCommunity);
    const community = communities.filter(({attributes: {FID}}) => {
      return FID === communityFID;
    })[0];
    selectedCommunityVar(community);
  }, [selectedCommunity, communities]);

  return (
    <section className="grid grid-cols-3 mt-8 gap-3">
      <div className="border rounded px-8 pt-12 pb-24">
        <h1 className="font-normal text-xl mb-1">Check Up On a Community</h1>
        <p className=" text-base text-gray-400 font-light mb-10">
          We'll take look into the health and growth of a community by
          extracting some of the information from our datasets.
        </p>
        <Select
          onSelect={val => {
            setSelectedCommunity(val);
          }}
          options={options}
          placeholder="Select a community"
          className="w-full"
          size="large"
        />
        <div className="mt-4">
          <Checkbox
            className="mt-2"
            onChange={evt => {
              useGeoenrichmentVar(evt.target.checked);
            }}
          >
            <span className="text-gray-400">Use geoenriched data</span>
          </Checkbox>
        </div>

        <Button
          className="w-full mt-8"
          type="primary"
          size="large"
          disabled={selectedCommunity === null}
          onClick={handleStartAnalysis}
        >
          <span className="text-white font-semibold">
            Start Analysis <ArrowRightOutlined />
          </span>
        </Button>
      </div>
      <div className="col-span-2">
        <CheckupMapWithNoSSR />
      </div>
    </section>
  );
};

export default CommunitySelector;
