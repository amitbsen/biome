import {useReactiveVar} from '@apollo/client';
import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer';
import React, {useEffect} from 'react';
import {
  candidateLocationsVar,
  candidateMapVar,
  candidateViewVar,
} from '../../data/cache';

const MapHandler = () => {
  const candidateLocations = useReactiveVar(candidateLocationsVar);

  const addLayerToMap = async () => {
    if (candidateLocations) {
      const blob = new Blob([candidateLocations], {
        type: 'application/json',
      });

      // eslint-disable-next-line node/no-unsupported-features/node-builtins
      const url = URL.createObjectURL(blob);
      const layer = new GeoJSONLayer({
        id: 'candidates',
        url,
      });

      const layerExtent = await layer.queryExtent();
      const map = candidateMapVar();
      const view = candidateViewVar();

      if (map && view) {
        map.add(layer);
        view.goTo(layerExtent);
      }
    }
  };

  useEffect(() => {
    addLayerToMap();
  }, [candidateLocations]);

  return <span />;
};

export default MapHandler;
