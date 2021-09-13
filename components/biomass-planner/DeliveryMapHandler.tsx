import {useReactiveVar} from '@apollo/client';
import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer';
import React, {useEffect} from 'react';
import {
  deliveryLocationsVar,
  deliveryMapVar,
  deliveryViewVar,
} from '../../data/cache';

const MapHandler = () => {
  const deliveryLocations = useReactiveVar(deliveryLocationsVar);

  const addLayerToMap = async () => {
    if (deliveryLocations) {
      const blob = new Blob([deliveryLocations], {
        type: 'application/json',
      });

      // eslint-disable-next-line node/no-unsupported-features/node-builtins
      const url = URL.createObjectURL(blob);
      const layer = new GeoJSONLayer({
        id: 'deliveries',
        url,
      });

      const layerExtent = await layer.queryExtent();
      const map = deliveryMapVar();
      const view = deliveryViewVar();

      if (map && view) {
        map.add(layer);
        view.goTo(layerExtent);
      }
    }
  };

  useEffect(() => {
    addLayerToMap();
  }, [deliveryLocations]);

  return <span />;
};

export default MapHandler;
