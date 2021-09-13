import {RcFile} from 'antd/lib/upload';

const getGeojson = async (file: RcFile) => {
  const fileText = await file.text();

  return fileText;
};

export {getGeojson};
