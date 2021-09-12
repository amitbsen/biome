import React from 'react';
import Link from 'next/link';

const Banner = () => {
  return (
    <Link href="explore">
      <div className="mb-8 bg-blue-500 rounded grid grid-cols-3 cursor-pointer">
        <div></div>
        <div className="py-6 col-span-2">
          <h1 className="text-xl text-white mb-1">Follow us on instagram</h1>
          <p className="mb-0 text-white text-base text-light">
            Start exploring the data
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Banner;
