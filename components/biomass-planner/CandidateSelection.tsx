import {UploadOutlined} from '@ant-design/icons';
import {Button, Upload} from 'antd';
import dynamic from 'next/dynamic';
import React from 'react';

const CandidateMapWithNoSSR = dynamic(() => import('./CandidateMap'), {
  ssr: false,
});

const CandidateSelection = () => {
  return (
    <section className="grid grid-cols-3 gap-4 mt-16">
      <div>
        <h1 className="text-xl font-light">Upload Candidate Locations</h1>
        <p className="text-base font-light text-gray-400">
          The candidate locations are the areas of interest where you are
          interested in growing new biomass crops.
        </p>
        <Upload className="w-full" style={{width: '100%'}}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </div>
      <div className="col-span-2 bg-blue-100" style={{minHeight: 400}}>
        <CandidateMapWithNoSSR />
      </div>
    </section>
  );
};

export default CandidateSelection;
