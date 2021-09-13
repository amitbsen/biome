import React from 'react';

interface DataProviderCardComponentProps {
  name: string;
  description: string;
  link: string;
  logo: string;
  image: string;
}

const DataProviderCard = (props: DataProviderCardComponentProps) => {
  const {name, description, link, image, logo} = props;

  return (
    <div
      className="bg-red-400 rounded flex flex-col cursor-pointer"
      style={{height: 170}}
    >
      <div className="mt-auto px-10">
        <div className="text-center rounded-t bg-white py-4">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DataProviderCard;
