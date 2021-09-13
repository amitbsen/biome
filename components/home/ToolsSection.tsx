import React from 'react';
import {TOOLS} from '../../constants/tools';
import SectionHeader from '../shared/SectionHeader';
import ToolCard from './ToolCard';

const ToolsSection = () => {
  return (
    <section className="mb-8">
      <SectionHeader
        title="Hidden Insights"
        subtitle="See the datasets in use from biomass planning to decision-making"
      />

      <div className="grid grid-cols-3 gap-6">
        {TOOLS.map(({title, description}, idx) => (
          <ToolCard title={title} description={description} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default ToolsSection;
