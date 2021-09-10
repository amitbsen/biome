import React from 'react';

interface SectionHeaderComponentProps {
  title: string;
  subtitle: string;
}

const SectionHeader = (props: SectionHeaderComponentProps) => {
  const {title, subtitle} = props;

  return (
    <div>
      <h1 className="text-2xl font-light mb-1">{title}</h1>
      <h2 className="text-base font-ligh text-gray-400">{subtitle}</h2>
    </div>
  );
};

export default SectionHeader;
