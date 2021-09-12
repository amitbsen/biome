import React, {useState} from 'react';
import MainMenu from './MainMenu';
import SectionButton from './SectionButton';

const ExploreMenuContainer = () => {
  const [currMenu, setCurrMenu] = useState('main');

  const goToMain = setCurrMenu.bind(this, 'main');
  const goToAnalyze = setCurrMenu.bind(this, 'analyze');
  const goToVisualize = setCurrMenu.bind(this, 'visualize');

  return (
    <div className="p-8">
      {currMenu === 'main' ? (
        <MainMenu goToAnalyze={goToAnalyze} goToVisualize={goToVisualize} />
      ) : null}
    </div>
  );
};

export default ExploreMenuContainer;
