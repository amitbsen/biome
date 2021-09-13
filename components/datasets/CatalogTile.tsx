import {Modal} from 'antd';
import React, {useState} from 'react';
import Image from 'next/image';

interface CatalogTileComponentProps {
  title: string;
}

const CatalogTile = (props: CatalogTileComponentProps) => {
  const {title} = props;
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

  return (
    <>
      <Modal
        title={title}
        onOk={hideModal}
        onCancel={hideModal}
        visible={isModalVisible}
        width={1000}
      >
        test
      </Modal>

      <div
        onClick={handleClick}
        style={{height: 230}}
        className="rounded cursor-pointer"
      >
        <div
          className="h-full w-full bg-gray-100 rounded"
          style={{
            position: 'relative',
            overflow: 'hidden',
            zIndex: 1,
          }}
        >
          <Image
            alt="Mountains"
            src="/images/agro-industrial-zones.png"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>

        <div style={{zIndex: 2, position: 'relative', bottom: 215, left: 15}}>
          <h1 className="text-white text-base" style={{maxWidth: 200}}>
            {title}
          </h1>
        </div>
      </div>
    </>
  );
};

export default CatalogTile;
