import React, {useEffect, useRef} from 'react';
import ArcGISMap from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';

const ExploreMap = () => {
  const mapDiv = useRef(null);

  useEffect(() => {
    if (mapDiv.current) {
      const map = new ArcGISMap({
        basemap: 'gray-vector',
      });

      new MapView({
        map,
        container: mapDiv.current,
      });
    }
  });

  return <div className="explorerMap h-full" ref={mapDiv} />;
};

export default ExploreMap;
