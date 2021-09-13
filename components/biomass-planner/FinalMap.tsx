import React, {useEffect, useRef} from 'react';
import ArcGISMap from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer';
import MapHandler from './DeliveryMapHandler';
import {
  candidateLocationsVar,
  deliveryLocationsVar,
  nearestFacilitiesVar,
} from '../../data/cache';

const FinalMap = () => {
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

      const candidateStr = candidateLocationsVar();
      const blob = new Blob([candidateStr], {
        type: 'application/json',
      });
      // eslint-disable-next-line node/no-unsupported-features/node-builtins
      const url = URL.createObjectURL(blob);
      const layer = new GeoJSONLayer({
        id: 'candidates',
        url,
      });

      const deliveryStr = deliveryLocationsVar();
      const blob2 = new Blob([deliveryStr], {
        type: 'application/json',
      });
      // eslint-disable-next-line node/no-unsupported-features/node-builtins
      const url2 = URL.createObjectURL(blob);
      const layer2 = new GeoJSONLayer({
        id: 'deliveries',
        url: url2,
        popupTemplate: {
          title: 'Candidate Location {id}',
        },
      });

      map.addMany([layer, layer2]);
    }
  });

  return (
    <div className="h-full" ref={mapDiv}>
      <MapHandler />
    </div>
  );
};

export default FinalMap;
