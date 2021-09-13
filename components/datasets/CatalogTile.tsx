import {Modal} from 'antd';
import React, {useState} from 'react';
import Image from 'next/image';
import {Dataset} from '../../types';
import DatasetDescription from '../shared/DatasetDescription';

interface CatalogTileComponentProps {
  title: string;
  dataset: Dataset;
}

const CatalogTile = (props: CatalogTileComponentProps) => {
  const {
    title,
    dataset,
    dataset: {domain},
  } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleClick = () => {
    showModal();
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const domainBgs = new Map();

  domainBgs.set('infrastructure', 'bg-blue-100 hover:bg-blue-200');
  domainBgs.set('zoning', 'bg-purple-100 hover:bg-purple-200');
  domainBgs.set('forestry', 'bg-green-100 hover:bg-green-200');
  domainBgs.set('agriculture', 'bg-yellow-100 hover:bg-yellow-200');

  const domainTextColors = new Map();

  domainTextColors.set('infrastructure', ['text-blue-800', 'text-blue-400']);
  domainTextColors.set('zoning', ['text-purple-800', 'text-purple-400']);
  domainTextColors.set('forestry', ['text-green-800', 'text-green-400']);
  domainTextColors.set('agriculture', ['text-yellow-800', 'text-yellow-400']);

  return (
    <>
      <Modal
        title={title}
        onOk={hideModal}
        onCancel={hideModal}
        visible={isModalVisible}
        width={1000}
      >
        <DatasetDescription dataset={dataset} />
      </Modal>

      <div
        onClick={handleClick}
        style={{height: 230}}
        className="rounded cursor-pointer"
      >
        <div
          className={`h-full w-full rounded transition-all duration-200 ${domainBgs.get(
            domain
          )}`}
          style={{
            position: 'relative',
            overflow: 'hidden',
            zIndex: 1,
          }}
        ></div>

        <div style={{zIndex: 2, position: 'relative', bottom: 215, left: 15}}>
          <h1
            className={`${domainTextColors.get(domain)[0]} text-lg`}
            style={{maxWidth: 200}}
          >
            {title}
          </h1>
          <p
            style={{maxWidth: 250}}
            className={`text-base ${domainTextColors.get(domain)[1]}`}
          >
            Learn more about {title.toLocaleLowerCase()}.
          </p>
        </div>
      </div>
    </>
  );
};

export default CatalogTile;
