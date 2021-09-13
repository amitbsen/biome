import {useReactiveVar} from '@apollo/client';
import axios from 'axios';
import Polygon from '@arcgis/core/geometry/Polygon';
import React, {useEffect, useState} from 'react';
import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer';

import {API_KEY} from '../../constants/esriConfig';
import {
  candidateLocationsVar,
  deliveryLocationsVar,
  nearestFacilitiesVar,
  selectedBiomassVar,
} from '../../data/cache';
import FinalMap from './FinalMap';
import {Descriptions} from 'antd';

const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
const findNearestUrl =
  'https://route-api.arcgis.com/arcgis/rest/services/World/ClosestFacility/NAServer/ClosestFacility_World/solveClosestFacility';

const cropMap = new Map();

cropMap.set(
  'rice',
  'https://landscape5.arcgis.com/arcgis/rest/services/Africa_Crop_Rice/ImageServer'
);
cropMap.set(
  'maize',
  'https://landscape5.arcgis.com/arcgis/rest/services/Africa_Crop_Maize/ImageServer'
);
cropMap.set(
  'sorghum',
  'https://landscape5.arcgis.com/arcgis/rest/services/Africa_Crop_Sorghum/ImageServer'
);

const ResultsContainer = () => {
  const candidateLocations = useReactiveVar(candidateLocationsVar);
  const deliveryLocations = useReactiveVar(deliveryLocationsVar);
  const selectedBiomass = useReactiveVar(selectedBiomassVar);
  const [nearestFacilities, setNearestFacilities] = useState<any | null>(null);
  const [yields, setYields] = useState<any[]>([]);
  const [results, setResults] = useState<null | any>(null);

  const formatIncidents = (incidentsStr: string) => {
    const incidentsGeojson = JSON.parse(incidentsStr);
    const formattedGeojson = {
      spatialReference: incidentsGeojson.spatialReference,
      features: incidentsGeojson.features.map(
        ({properties, geometry: {coordinates}}) => {
          const polygon = new Polygon({
            rings: coordinates,
          });

          const {x, y} = polygon.centroid;

          return {
            attributes: properties,
            geometry: {x, y},
          };
        }
      ),
    };
    return JSON.stringify(formattedGeojson);
  };

  const formatFacilities = (facilitiesStr: string) => {
    const facilitiesGeojson = JSON.parse(facilitiesStr);
    const formattedGeojson = {
      spatialReference: facilitiesGeojson.spatialReference,
      features: facilitiesGeojson.features.map(
        ({properties, geometry: {coordinates}}) => {
          const [x, y] = coordinates;

          return {
            attributes: properties,
            geometry: {x, y},
          };
        }
      ),
    };

    return JSON.stringify(formattedGeojson);
  };

  const getNearestFacilities = async (
    candidateStr: string,
    deliveryStr: string
  ) => {
    const formData = new FormData();
    formData.append('token', API_KEY);
    formData.append('incidents', formatIncidents(candidateStr));
    formData.append('facilities', formatFacilities(deliveryStr));
    formData.append('returnCFRoutes', 'true');
    formData.append('f', 'json');

    const response = await axios.post(
      `${corsAnywhere}${findNearestUrl}`,
      formData
    );

    setNearestFacilities(response.data.routes);
    // eslint-disable-next-line no-debugger
    debugger;
    nearestFacilitiesVar(response.data.routes);
  };

  const getYields = async (candidateStr: string, crop: string) => {
    const blob = new Blob([candidateStr], {
      type: 'application/json',
    });
    // eslint-disable-next-line node/no-unsupported-features/node-builtins
    const url = URL.createObjectURL(blob);
    const layer = new GeoJSONLayer({
      id: 'candidates',
      url,
    });

    const {features} = await layer.queryFeatures({
      where: '1=1',
      returnGeometry: true,
      outSpatialReference: {wkid: 102100},
    });
    const yieldArr = [];

    for (let idx = 0; idx < features.length; idx += 1) {
      const {
        attributes: {id},
        geometry,
      } = features[idx];
      const geo: any = geometry;

      const formData = new FormData();
      formData.append('token', API_KEY);
      formData.append('geometryType', 'esriGeometryPolygon');
      formData.append('f', 'pjson');
      formData.append('geometry', JSON.stringify({rings: geo.rings}));

      const response = await axios.post(
        `${corsAnywhere}${cropMap.get(crop)}/computeStatisticsHistograms`,
        formData
      );

      yieldArr.push({id, val: response.data.statistics[0].mean});
    }

    setYields(yieldArr);
  };

  useEffect(() => {
    if (candidateLocations && deliveryLocations) {
      getNearestFacilities(candidateLocations, deliveryLocations);
    }

    // Get the average hectare yield
    if (candidateLocations) {
      getYields(candidateLocations, selectedBiomass);
    }
  }, [candidateLocations, deliveryLocations, selectedBiomass]);

  return (
    <section className="mt-16 grid grid-cols-3">
      <div className="overflow-auto " style={{maxHeight: 400}}>
        {yields
          ? yields.map(({id, val}) => {
              return (
                <div className="border rounded mb-4 p-8">
                  <h1 className="text-light text-xl">
                    Candidation Location {id}
                  </h1>
                  <p className="text-light text-sm text-gray-400">
                    The average annual yield is: {val.toFixed(3)} hectares per
                    cell.
                  </p>
                </div>
              );
            })
          : null}
      </div>

      <div className="col-span-2">
        {nearestFacilities && yields ? <FinalMap /> : null}
      </div>
      <div className="col-span-3">
        <h1>Routes</h1>
        {nearestFacilities
          ? nearestFacilities.features.map(({attributes}, idx) => {
              return (
                <div className="rounded border" key={idx}>
                  <Descriptions title={`Route: ${attributes.Name}`}>
                    <Descriptions.Item label="Total Mileage">
                      {attributes.Total_Miles.toFixed(2)}
                    </Descriptions.Item>
                    <Descriptions.Item label="Total Travel Time">
                      {attributes.Total_TravelTime.toFixed(2)}
                    </Descriptions.Item>
                  </Descriptions>
                </div>
              );
            })
          : null}
      </div>
    </section>
  );
};

export default ResultsContainer;
