import React from 'react';
import Link from 'next/link';
import {ArrowRightOutlined} from '@ant-design/icons';

const Banner = () => {
  return (
    <Link href="explore">
      <div className="mb-8 bg-gradient-to-r from-blue-600 to-blue-900 rounded flex justify-between cursor-pointer px-16">
        <div className="py-6 col-span-2">
          <h1 className="text-xl text-white mb-1">More Than Just Data</h1>
          <p className="mb-0 text-white text-base text-light">
            Biome's toolkit helps you understand the data on a deeper level.
          </p>
        </div>
        <div className="pt-10">
          <Link href="/explore">
            <span className="hover:bg-white hover:text-blue-600 transition-all duration-200 text-white text-base border-2 border-white px-5 py-3 ">
              Dive Deeper <ArrowRightOutlined />
            </span>
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default Banner;
