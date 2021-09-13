import React, {useEffect, useRef} from 'react';
import ArcGISMap from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import MapHandler from './CandidateMapHandler';
import Legend from '@arcgis/core/widgets/Legend';
import {candidateMapVar, candidateViewVar} from '../../data/cache';

const CandidateMap = () => {
  const mapDiv = useRef(null);

  useEffect(() => {
    if (mapDiv.current) {
      const map = new ArcGISMap({
        basemap: 'osm',
      });

      const view = new MapView({
        map,
        container: mapDiv.current,
        extent: {
          spatialReference: {
            wkid: 102100,
          },
          xmin: 40680839.2594038,
          ymin: 116927.3855358042,
          xmax: 42539787.78729879,
          ymax: 1239634.4569881745,
        },
      });

      candidateMapVar(map);
      candidateViewVar(view);
    }
  });

  return (
    <div className="explorerMap h-full" ref={mapDiv}>
      <MapHandler />
    </div>
  );
};

export default CandidateMap;
