import ArcGISMap from '@arcgis/core/Map';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import ImageryLayer from '@arcgis/core/layers/ImageryLayer';
import {Service} from '../../types';

const addServiceToMap = (map: ArcGISMap, service: Service) => {
  if (service.type === 'feature') {
    addFeatureServiceToMap(map, service);
  }
  if (service.type === 'image') {
    addImageServiceToMap(map, service);
  }
};
const addImageServiceToMap = (map: ArcGISMap, service: Service) => {
  const {id, link, fields} = service;

  const featureLayer = new ImageryLayer({
    url: link,
    id,
    popupEnabled: true,
  });

  const fieldInfos = fields
    ? fields.map(field => ({
        fieldName: field.name,
      }))
    : [];

  const popupTemplate = {
    content: [
      {
        type: 'fields',
        fieldInfos: fieldInfos,
      },
    ],
  };
  featureLayer.set('popupTemplate', popupTemplate);

  map.add(featureLayer);
};

const addFeatureServiceToMap = (map: ArcGISMap, service: Service) => {
  const {id, link, fields} = service;

  const featureLayer = new FeatureLayer({
    url: link,
    id,
    popupEnabled: true,
  });

  const fieldInfos = fields
    ? fields.map(field => ({
        fieldName: field.name,
      }))
    : [];

  const popupTemplate = {
    content: [
      {
        type: 'fields',
        fieldInfos: fieldInfos,
      },
    ],
  };
  featureLayer.set('popupTemplate', popupTemplate);

  map.add(featureLayer);
};

const removeServiceFromMap = (map: ArcGISMap, serviceId: string) => {
  const layer = map.findLayerById(serviceId);
  map.remove(layer);
};

export {addServiceToMap, removeServiceFromMap};
