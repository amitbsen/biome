import {ArrowDownOutlined} from '@ant-design/icons';
import {Divider} from 'antd';
import React from 'react';

const CheckupResults = () => {
  return (
    <section className="mb-16 w-7/12 mx-auto border pb-12 px-16 pt-20 rounded mt-16">
      <h1 className="text-center text-4xl font-light mb-0">
        Adamaoua, Cameroon
      </h1>
      <Divider />

      <div className="mb-8">
        <h1 className="uppercase text-xs">Forest Coverage</h1>
        <p className="text-base font-light text-gray-500">
          In 2010, Adamaoua had 3.24Mha of tree cover, extending over 51% of its
          land area. In 2020, it lost 6.03kha of tree cover, equivalent to
          2.15Mt of CO₂ of emissions.
        </p>
      </div>

      <div className="mb-10">
        <h1 className="uppercase text-xs">Population</h1>
        <p className="text-base font-light text-gray-500">
          In 2010, Adamaoua had 3.24Mha of tree cover, extending over 51% of its
          land area. In 2020, it lost 6.03kha of tree cover, equivalent to
          2.15Mt of CO₂ of emissions.
        </p>
      </div>

      <div className="mb-10">
        <h1 className="uppercase text-xs">Electrification</h1>
        <p className="text-base font-light text-gray-500">
          In 2010, Adamaoua had 3.24Mha of tree cover, extending over 51% of its
          land area. In 2020, it lost 6.03kha of tree cover, equivalent to
          2.15Mt of CO₂ of emissions.
        </p>
      </div>
    </section>
  );
};

export default CheckupResults;
