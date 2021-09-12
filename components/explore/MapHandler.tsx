import {useReactiveVar} from '@apollo/client';
import {message} from 'antd';
import React, {useEffect} from 'react';
import {addedLayerVar, exploreMapVar, removedLayerVar} from '../../data/cache';
import ArcGISMap from '@arcgis/core/Map';
import {addServiceToMap, removeServiceFromMap} from '../utils/mapUtils';

const MapHandler = () => {
  const addedLayer = useReactiveVar(addedLayerVar);
  const removedLayer = useReactiveVar(removedLayerVar);

  useEffect(() => {
    const map = exploreMapVar();

    if (addedLayer && map) {
      message.success(addedLayer.link);
      addServiceToMap(map, addedLayer);
      addedLayerVar(null);
    }
  }, [addedLayer]);

  useEffect(() => {
    const map = exploreMapVar();

    if (removedLayer && map) {
      message.success(removedLayer.link);
      removeServiceFromMap(map, removedLayer.id);
      removedLayerVar(null);
    }
  }, [removedLayer]);

  return <span />;
};

export default MapHandler;
