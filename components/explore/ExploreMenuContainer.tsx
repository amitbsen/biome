import React, {useState} from 'react';
import AnalyzeMenu from './AnalyzeMenu';
import MainMenu from './MainMenu';
import VisualizeMenu from './VisualizeMenu';

const ExploreMenuContainer = () => {
  const [currMenu, setCurrMenu] = useState('main');

  const goToMain = setCurrMenu.bind(this, 'main');
  const goToAnalyze = setCurrMenu.bind(this, 'analyze');
  const goToVisualize = setCurrMenu.bind(this, 'visualize');

  return (
    <div className="px-8 h-full overflow-auto">
      {currMenu === 'main' ? (
        <MainMenu goToAnalyze={goToAnalyze} goToVisualize={goToVisualize} />
      ) : null}
      {currMenu === 'analyze' ? <AnalyzeMenu goBack={goToMain} /> : null}
      {currMenu === 'visualize' ? <VisualizeMenu goBack={goToMain} /> : null}
    </div>
  );
};

export default ExploreMenuContainer;
