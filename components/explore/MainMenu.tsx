import React from 'react';
import ExploreHeader from './ExploreHeader';
import SectionButton from './SectionButton';

interface MainMenuComponentProps {
  goToAnalyze: () => void;
  goToVisualize: () => void;
}

const MainMenu = (props: MainMenuComponentProps) => {
  const {goToAnalyze, goToVisualize} = props;

  return (
    <>
      <ExploreHeader />
      <SectionButton
        color="blue"
        title="Analyze"
        subtitle="Take a deeper look into specific localities to see information on demographics, forest change, and more."
        handleClick={goToAnalyze}
      />
      <SectionButton
        color="green"
        title="Visualize"
        subtitle="Visualize different combinations of datasets together in the same map."
        handleClick={goToVisualize}
      />
    </>
  );
};

export default MainMenu;
