import {InMemoryCache, makeVar} from '@apollo/client';
import {Service} from '../../types';

const addedLayerVar = makeVar<null | Service>(null);
const exploreMapVar = makeVar<null | any>(null);
const communityCheckupMapVar = makeVar<null | any>(null);
const removedLayerVar = makeVar<null | Service>(null);
const selectedCommunityVar = makeVar<null | any>(null);
const useGeoenrichmentVar = makeVar(false);

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
};
