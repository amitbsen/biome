import {InMemoryCache, makeVar} from '@apollo/client';
import {Service} from '../../types';

const addedLayerVar = makeVar<null | Service>(null);
const exploreMapVar = makeVar<null | any>(null);
const candidateMapVar = makeVar<null | any>(null);
const communityCheckupMapVar = makeVar<null | any>(null);
const removedLayerVar = makeVar<null | Service>(null);
const selectedCommunityVar = makeVar<null | any>(null);
const useGeoenrichmentVar = makeVar(false);
const candidateLocationsVar = makeVar<null | any>(null);
const candidateViewVar = makeVar<null | any>(null);

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        useGeoenrichment: {
          read() {
            return useGeoenrichmentVar();
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
        candidateMap: {
          read() {
            return candidateMapVar();
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
        removedLayer: {
          read() {
            return removedLayerVar();
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
};
