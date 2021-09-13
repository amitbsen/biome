import React from 'react';
import {DOMAINS} from '../../constants/datasets';
import SectionHeader from '../shared/SectionHeader';
import DomainCard from './DomainCard';

const DomainDisplay = () => {
  return (
    <section className="mb-8">
      <SectionHeader
        title="Diverse Datasets"
        subtitle="Access the catalog of datasets that are available"
      />

      <div className="grid grid-cols-4 gap-6">
        {DOMAINS.map(({title, description, link, bgImg}, idx) => {
          return (
            <DomainCard
              name={title}
              key={idx}
              description={description}
              link={link}
              bgImg={bgImg}
            />
          );
        })}
      </div>
    </section>
  );
};

export default DomainDisplay;
