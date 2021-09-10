import React from 'react';

interface SeparatorComponentProps {
  color: string;
  width: number;
}

const Separator = (props: SeparatorComponentProps) => {
  const {color, width} = props;

  return (
    <div style={{width, borderTop: `3px solid ${color}`, marginBottom: 20}} />
  );
};

export default Separator;
