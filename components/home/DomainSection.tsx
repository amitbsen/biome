import React from 'react';
import DatasetPanel from './DatasetCollapse';

interface Dataset {
  title: string;
  domain: string;
}

interface DomainSectionComponentProps {
  title: string;
  datasets: Dataset[];
}

const DomainSection = (props: DomainSectionComponentProps) => {
  const {title, datasets} = props;

  return (
    <section>
      <h1>{title}</h1>

      {datasets.map(({title}) => (
        <DatasetPanel header={title} key={title} />
      ))}
    </section>
  );
};

export default DomainSection;
