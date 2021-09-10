import React from 'react';
import SectionHeader from '../shared/SectionHeader';
import DatasetPanel from './DatasetCollapse';

interface Dataset {
  title: string;
  domain: string;
}

interface DomainSectionComponentProps {
  title: string;
  subtitle: string;
  datasets: Dataset[];
}

const DomainSection = (props: DomainSectionComponentProps) => {
  const {title, subtitle, datasets} = props;

  return (
    <section className="py-8">
      <SectionHeader title={title} subtitle={subtitle} />

      {datasets.map(({title}) => (
        <DatasetPanel header={title} key={title} />
      ))}
    </section>
  );
};

export default DomainSection;
