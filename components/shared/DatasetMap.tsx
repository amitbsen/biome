import React, {useRef, useEffect} from 'react';
import ArcGISMap from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import esriConfig from '@arcgis/core/config';
import {API_KEY} from '../../constants/esriConfig';
import {Dataset} from '../../types';
import {addServiceToMap} from '../utils/mapUtils';

interface JazzMapComponentProps {
  dataset: Dataset;
}

const JazzMap = (props: JazzMapComponentProps) => {
  const {dataset} = props;

  // const {
  //   layerUrl = 'https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Alternative_Fuel_Station_March2018/FeatureServer',
  // } = props;
  const mapDiv = useRef(null);

  useEffect(() => {
    if (mapDiv.current) {
      esriConfig.apiKey = API_KEY;

      const map = new ArcGISMap({
        basemap: 'gray-vector',
      });

      new MapView({
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

      addServiceToMap(map, dataset.service);
    }
  }, []);

  return <div className="mapDiv" ref={mapDiv}></div>;
};

export default JazzMap;
