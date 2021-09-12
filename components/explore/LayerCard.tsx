import {DeleteOutlined, InfoOutlined, PlusOutlined} from '@ant-design/icons';
import {Card, Modal} from 'antd';
import React, {useState} from 'react';
import {Dataset} from '../../types';
import DatasetTextDescription from '../shared/DatasetTextDescription';

interface LayerCardComponentProps {
  dataset: Dataset;
}
const {Meta} = Card;

const LayerCard = (props: LayerCardComponentProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  const {dataset} = props;

  return (
    <>
      <Card
        actions={[
          <PlusOutlined />,
          <DeleteOutlined />,
          <InfoOutlined
            onClick={() => {
              setModalVisible(true);
            }}
          />,
        ]}
      >
        <Meta title={dataset.title} />
      </Card>

      <Modal
        footer={null}
        width={600}
        title={dataset.title}
        visible={modalVisible}
        onCancel={() => {
          setModalVisible(false);
        }}
      >
        <DatasetTextDescription dataset={dataset} />
      </Modal>
    </>
  );
};

export default LayerCard;
