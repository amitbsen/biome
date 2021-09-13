import {InMemoryCache, makeVar} from '@apollo/client';
import {Service} from '../../types';

const addedLayerVar = makeVar<null | Service>(null);
const exploreMapVar = makeVar<null | any>(null);
const communityCheckupMapVar = makeVar<null | any>(null);
const removedLayerVar = makeVar<null | Service>(null);
const selectedCommunityVar = makeVar<null | any>(null);
const useGeoenrichmentVar = makeVar(false);
const candidateLocationsVar = makeVar<null | any>(null);
const candidateViewVar = makeVar<null | any>(null);
const candidateMapVar = makeVar<null | any>(null);
const deliveryLocationsVar = makeVar<null | any>(null);
const deliveryViewVar = makeVar<null | any>(null);
const deliveryMapVar = makeVar<null | any>(null);
const selectedBiomassVar = makeVar<string>('maize');
const nearestFacilitiesVar = makeVar<null | any>(null);

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        useGeoenrichment: {
          read() {
            return useGeoenrichmentVar();
          },
        },
        selectedBiomass: {
          read() {
            return selectedBiomassVar();
          },
        },
        selectedCommunity: {
          read() {
            return selectedCommunityVar();
          },
        },
        exploreMap: {
          read() {
            return exploreMapVar();
          },
        },
        communityCheckupMap: {
          read() {
            return communityCheckupMapVar();
          },
        },
        addedLayer: {
          read() {
            return addedLayerVar();
          },
        },
        candidateMap: {
          read() {
            return candidateMapVar();
          },
        },
        candidateLocations: {
          read() {
            return candidateLocationsVar();
          },
        },
        candidateView: {
          read() {
            return candidateViewVar();
          },
        },
        deliveryMap: {
          read() {
            return deliveryMapVar();
          },
        },
        deliveryLocations: {
          read() {
            return deliveryLocationsVar();
          },
        },
        deliveryView: {
          read() {
            return deliveryViewVar();
          },
        },
        removedLayer: {
          read() {
            return removedLayerVar();
          },
        },
        nearestFacilities: {
          read() {
            return nearestFacilitiesVar();
          },
        },
      },
    },
  },
});

export {
  addedLayerVar,
  removedLayerVar,
  exploreMapVar,
  cache,
  communityCheckupMapVar,
  selectedCommunityVar,
  useGeoenrichmentVar,
  candidateMapVar,
  candidateLocationsVar,
  candidateViewVar,
  deliveryMapVar,
  deliveryLocationsVar,
  deliveryViewVar,
  selectedBiomassVar,
  nearestFacilitiesVar,
};
