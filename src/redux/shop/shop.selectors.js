import { createSelector } from "reselect";

const selectShop = state => state.shop;

// const COLLECTION_MAP_ID = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5
// };

export const selectShopData = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollections = collectionUrlParam =>
  createSelector(
    [selectShopData],
    collections => collections[collectionUrlParam]
  );

export const selectShopDataArray = createSelector(
  [selectShopData],
  collections => Object.keys(collections).map(key => collections[key])
);
