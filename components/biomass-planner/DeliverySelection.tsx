import {UploadOutlined} from '@ant-design/icons';
import {Button, Upload} from 'antd';
import {RcFile} from 'antd/lib/upload';
import dynamic from 'next/dynamic';
import React from 'react';
import {deliveryLocationsVar} from '../../data/cache';
import {getGeojson} from '../utils/fileUtils';

const DeliveryMapWithNoSSR = dynamic(() => import('./DeliveryMap'), {
  ssr: false,
});

const DeliverySelection = () => {
  const handleBeforeUpload = (file: RcFile) => {
    getGeojson(file).then(geojson => {
      deliveryLocationsVar(geojson);
    });
  };

  return (
    <section className="grid grid-cols-3 gap-4 mt-16">
      <div>
        <h1 className="text-xl font-light">Upload Delivery Locations</h1>
        <p className="text-base font-light text-gray-400">
          The Delivery locations are the areas of interest where you are
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
        <DeliveryMapWithNoSSR />
      </div>
    </section>
  );
};

export default DeliverySelection;
