import {Button, Divider} from 'antd';
import React from 'react';
import Separator from '../shared/Separator';
import Link from 'next/link';

interface DomainCardComponentProps {
  name: string;
  description: string;
  link: string;
  bgImg: string;
}

const DomainCard = (props: DomainCardComponentProps) => {
  const {name, description, link, bgImg} = props;
  return (
    <Link href="/datasets">
      <div
        className={`${bgImg} bg-cover bg-center text-white text-center rounded grid grid-rows pt-12 pb-24 justify-items-center cursor-pointer`}
        style={{height: 488}}
      >
        <Separator color="white" width={30} />
        <div className="text-center">
          <h2 className="text-lg text-white">{name}</h2>
          <p>{description}</p>
        </div>
        <div>
          <p className="hover:bg-white hover:text-black transition-all duration-200 mb-0 py-1 px-4 border-2 text-sm border-white">
            Explore
          </p>
        </div>
      </div>
    </Link>
  );
};

export default DomainCard;
