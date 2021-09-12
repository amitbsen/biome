import {InMemoryCache, makeVar} from '@apollo/client';
import {Service} from '../../types';

const addedLayerVar = makeVar<null | Service>(null);
const exploreMapVar = makeVar<null | any>(null);
const communityCheckupMapVar = makeVar<null | any>(null);
const removedLayerVar = makeVar<null | Service>(null);

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
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
};
