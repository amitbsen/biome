import React from 'react';
import {TOOLS} from '../../constants/tools';
import SectionHeader from '../shared/SectionHeader';
import ToolCard from './ToolCard';

const ToolsSection = () => {
  return (
    <section className="mb-8">
      <SectionHeader
        title="Actionable Insights"
        subtitle="Use Biome's tools to get empowered to make the decisions that matter the most."
      />

      <div className="grid grid-cols-3 gap-6">
        {TOOLS.map(({title, description, image, link}, idx) => (
          <ToolCard
            title={title}
            description={description}
            key={idx}
            image={image}
            link={link}
          />
        ))}
      </div>
    </section>
  );
};

export default ToolsSection;
