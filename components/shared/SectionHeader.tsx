import React from 'react';

interface SectionHeaderComponentProps {
  title: string;
  subtitle: string;
}

const SectionHeader = (props: SectionHeaderComponentProps) => {
  const {title, subtitle} = props;

  return (
    <div className="mb-4">
      <h1 className="text-2xl mb-1">{title}</h1>
      <h2 className="text-base font-light text-gray-400">{subtitle}</h2>
    </div>
  );
};

export default SectionHeader;
