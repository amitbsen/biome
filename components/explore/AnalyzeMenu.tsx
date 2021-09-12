import React from 'react';
import SectionHeader from '../shared/SectionHeader';
import BackButton from './BackButton';

interface AnalyzeMenuComponentProps {
  goBack: () => void;
}

const AnalyzeMenu = (props: AnalyzeMenuComponentProps) => {
  const {goBack} = props;

  return (
    <div className="pt-5">
      <div className="mb-4">
        <BackButton goBack={goBack} />
      </div>
      <SectionHeader
        title="Analyze"
        subtitle="Take a deeper look into specific localities to see information on demographics, forest change, and more."
      />
    </div>
  );
};

export default AnalyzeMenu;
