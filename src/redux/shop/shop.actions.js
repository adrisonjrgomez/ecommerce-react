import ShopTypesActions from "./shop.types";

export const setCollectionsData = (collections) => ({
  type: ShopTypesActions.SET_COLLECTION_DATA,
  payload: collections,
});

export const fetchCollectionStart = () => ({
  type: ShopTypesActions.FETCH_COLLECTIONS_START,
});

export const fetchCollectionSuccess = (collections) => ({
  type: ShopTypesActions.FETCH_COLLECTIONS_SUCCESS,
  payload: collections,
});

export const fetchCollectionFailure = (error) => ({
  type: ShopTypesActions.FETCH_COLLECTIONS_FAILURE,
  payload: error,
});
