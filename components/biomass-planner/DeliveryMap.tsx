import React, {useEffect, useRef} from 'react';
import ArcGISMap from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import MapHandler from './DeliveryMapHandler';
import {deliveryMapVar, deliveryViewVar} from '../../data/cache';

const DeliveryMap = () => {
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

      deliveryMapVar(map);
      deliveryViewVar(view);
    }
  });

  return (
    <div className="h-full" ref={mapDiv}>
      <MapHandler />
    </div>
  );
};

export default DeliveryMap;
