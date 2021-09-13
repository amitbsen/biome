import React from 'react';
import {DATA_PROVIDERS} from '../../constants/dataProviders';
import SectionHeader from '../shared/SectionHeader';
import DataProviderCard from './DataProviderCard';

const DataProvidersSection = () => {
  return (
    <section>
      <SectionHeader
        title={'Data Providers'}
        subtitle={'Understand the data providers around the globe'}
      />
      <div className="grid grid-cols-4 gap-6">
        {DATA_PROVIDERS.map(({name, description, link, image, logo}, idx) => (
          <DataProviderCard
            name={name}
            description={description}
            link={link}
            image={image}
            logo={logo}
          />
        ))}
      </div>
    </section>
  );
};

export default DataProvidersSection;
