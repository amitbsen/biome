import {useReactiveVar} from '@apollo/client';
import {Divider} from 'antd';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {selectedCommunityVar, useGeoenrichmentVar} from '../../data/cache';
import esriConfig from '@arcgis/core/config';
import {API_KEY} from '../../constants/esriConfig';
import {ApiKey} from '@esri/arcgis-rest-auth';

const CheckupResults = () => {
  const selectedCommunity = useReactiveVar(selectedCommunityVar);
  const useGeoenrichment = useReactiveVar(useGeoenrichmentVar);
  const [communityName, setCommunityName] = useState<null | string>(null);
  const [geometry, setGeometry] = useState<any | null>(null);
  const [carbonBiomassStatement, setCarbonBiomassStatement] = useState('');
  const [riceStatement, setRiceStatement] = useState('');
  const [sorghumStatement, setSorghumStatement] = useState('');
  const [maizeStatement, setMaizeStatement] = useState('');
  const [populationStatement, setPopulationStatement] = useState('');

  useEffect(() => {
    const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';

    if (communityName) {
      const carbonBiomassUrl =
        'https://landscape5.arcgis.com/arcgis/rest/services/Africa_Carbon_Biomass/ImageServer';
      const riceUrl =
        'https://landscape5.arcgis.com/arcgis/rest/services/Africa_Crop_Rice/ImageServer';
      const sorghumUrl =
        'https://landscape5.arcgis.com/arcgis/rest/services/Africa_Crop_Sorghum/ImageServer';
      const maizeUrl =
        'https://landscape5.arcgis.com/arcgis/rest/services/Africa_Crop_Maize/ImageServer';

      const formData = new FormData();
      formData.append('token', API_KEY);
      formData.append('geometryType', 'esriGeometryPolygon');
      formData.append('f', 'pjson');
      formData.append('geometry', JSON.stringify(geometry));

      axios
        .post(
          `${corsAnywhere}${carbonBiomassUrl}/computeStatisticsHistograms`,
          formData
        )
        .then(response => {
          const {
            data: {statistics: statsArr},
          } = response;
          const [stats] = statsArr;
          const {mean, standardDeviation} = stats;
          setCarbonBiomassStatement(
            `The 1991-2001 annual average area of carbon biomass harvested in ${communityName} was ${mean.toFixed(
              2
            )} per grid cell with a standard deviation of ${standardDeviation.toFixed(
              2
            )} hectares.`
          );
        });

      axios
        .post(`${corsAnywhere}${riceUrl}/computeStatisticsHistograms`, formData)
        .then(response => {
          const {
            data: {statistics: statsArr},
          } = response;
          const [stats] = statsArr;
          const {mean, standardDeviation} = stats;
          setRiceStatement(
            `The 1991-2001 annual average area of rice harvested in ${communityName} was ${mean.toFixed(
              2
            )} per grid cell with a standard deviation of ${standardDeviation.toFixed(
              2
            )} hectares.`
          );
        });

      axios
        .post(
          `${corsAnywhere}${sorghumUrl}/computeStatisticsHistograms`,
          formData
        )
        .then(response => {
          const {
            data: {statistics: statsArr},
          } = response;
          const [stats] = statsArr;
          const {mean, standardDeviation} = stats;
          setSorghumStatement(
            `The 1991-2001 annual average area of sorghum harvested in ${communityName} was ${mean.toFixed(
              2
            )} per grid cell with a standard deviation of ${standardDeviation.toFixed(
              2
            )} hectares.`
          );
        });

      axios
        .post(
          `${corsAnywhere}${maizeUrl}/computeStatisticsHistograms`,
          formData
        )
        .then(response => {
          const {
            data: {statistics: statsArr},
          } = response;
          const [stats] = statsArr;
          const {mean, standardDeviation} = stats;
          setMaizeStatement(
            `The 1991-2001 annual average area of maize harvested in ${communityName} was ${mean.toFixed(
              2
            )} per grid cell with a standard deviation of ${standardDeviation.toFixed(
              2
            )} hectares.`
          );
        });
    }

    if (communityName && useGeoenrichment) {
      const formData = new FormData();
      const enrichGeometry = [
        {
          spatialReference: {
            wkid: 102100,
            latestWkid: 3857,
          },
          geometry,
        },
      ];

      formData.append('token', API_KEY);
      formData.append('f', 'json');
      formData.append('studyAreas', JSON.stringify(enrichGeometry));

      axios
        .post(
          'https://geoenrich.arcgis.com/arcgis/rest/services/World/geoenrichmentserver/Geoenrichment/enrich',
          formData
        )
        .then(response => {
          const {
            data: {results: statsArr},
          } = response;
          const [stats] = statsArr;
          const {
            value: {FeatureSet},
          } = stats;

          const [feature] = FeatureSet[0].features;
          const {
            attributes: {TOTPOP},
          } = feature;

          setPopulationStatement(
            `The total population for the region is: ${TOTPOP.toLocaleString()}`
          );
        });
    }
  }, [geometry, communityName]);

  useEffect(() => {
    if (selectedCommunity) {
      const {
        attributes: {NAME_0, NAME_1, NAME_2},
        geometry,
      } = selectedCommunity;

      setCommunityName(`${NAME_2}, ${NAME_1}, ${NAME_0}`);
      setGeometry(geometry);
    } else {
      setCommunityName(null);
    }
  }, [selectedCommunity]);

  if (communityName) {
    return (
      <section className="mb-16 w-7/12 mx-auto border pb-12 px-16 pt-20 rounded mt-16">
        <h1 className="text-center text-4xl font-light mb-0">
          {communityName}
        </h1>
        <Divider />

        <div className="mb-10">
          <h1 className="uppercase text-xs">Annual Area of Carbon Biomass</h1>
          <p className="text-base font-light text-gray-500">
            {carbonBiomassStatement}
          </p>
        </div>

        <div className="mb-10">
          <h1 className="uppercase text-xs">Annual Area of Rice</h1>
          <p className="text-base font-light text-gray-500">{riceStatement}</p>
        </div>

        <div className="mb-10">
          <h1 className="uppercase text-xs">Annual Area of Sorghum</h1>
          <p className="text-base font-light text-gray-500">
            {sorghumStatement}
          </p>
        </div>

        <div className="mb-10">
          <h1 className="uppercase text-xs">Annual Area of Maize</h1>
          <p className="text-base font-light text-gray-500">{maizeStatement}</p>
        </div>

        {useGeoenrichment ? (
          <div className="mb-10">
            <h1 className="uppercase text-xs">Total Population</h1>
            <p className="text-base font-light text-gray-500">
              {populationStatement}
            </p>
          </div>
        ) : null}
      </section>
    );
  }
  return <></>;
};

export default CheckupResults;
