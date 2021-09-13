import React from 'react';
import SectionHeader from '../shared/SectionHeader';
import DatasetPanel from './DatasetCollapse';
import {Dataset} from '../../types';

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

      {datasets.map(dataset => (
        <DatasetPanel dataset={dataset} />
      ))}
    </section>
  );
};

export default DomainSection;
