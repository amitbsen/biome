import React from 'react';
import {DOMAINS} from '../../constants/datasets';
import SectionHeader from '../shared/SectionHeader';
import DomainCard from './DomainCard';

const DomainDisplay = () => {
  return (
    <section className="mb-8">
      <SectionHeader
        title="Museum explorer"
        subtitle="Where do you want to visit today?"
      />

      <div className="grid grid-cols-4 gap-6">
        {DOMAINS.map(({title, description, link}, idx) => {
          return (
            <DomainCard
              name={title}
              key={idx}
              description={description}
              link={link}
            />
          );
        })}
      </div>
    </section>
  );
};

export default DomainDisplay;
