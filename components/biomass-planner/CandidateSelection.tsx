import {UploadOutlined} from '@ant-design/icons';
import {Button, Upload} from 'antd';
import {RcFile} from 'antd/lib/upload';
import dynamic from 'next/dynamic';
import React from 'react';
import {candidateLocationsVar} from '../../data/cache';
import {getGeojson} from '../utils/fileUtils';

const CandidateMapWithNoSSR = dynamic(() => import('./CandidateMap'), {
  ssr: false,
});

const CandidateSelection = () => {
  const handleBeforeUpload = (file: RcFile) => {
    getGeojson(file).then(geojson => {
      candidateLocationsVar(geojson);
    });
  };

  return (
    <section className="grid grid-cols-3 gap-4 mt-16">
      <div>
        <h1 className="text-xl font-light">Upload Candidate Locations</h1>
        <p className="text-base font-light text-gray-400">
          The candidate locations are the areas of interest where you are
          interested in growing new biomass crops.
        </p>
        <Upload
          beforeUpload={handleBeforeUpload}
          className="w-full"
          style={{width: '100%'}}
        >
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
