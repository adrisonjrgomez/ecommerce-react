import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

// const COLLECTION_MAP_ID = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5
// };

export const selectShopData = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollections = (collectionUrlParam) =>
  createSelector([selectShopData], (collections) =>
    collections
      ? collections[collectionUrlParam] || { title: null, items: null }
      : null
  );

export const selectShopDataArray = createSelector(
  [selectShopData],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectisCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectIsCollectionLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);
