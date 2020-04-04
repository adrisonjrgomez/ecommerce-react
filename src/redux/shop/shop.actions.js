import ShopTypesActions from "./shop.types";
import {
  firestore,
  convertCollectionSnapshopToMap,
} from "../../firebase/firebase.utils";

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

export const fecthCollectionStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const collections = convertCollectionSnapshopToMap(snapshot);
        dispatch(fetchCollectionSuccess(collections));
      })
      .catch((error) => dispatch(fetchCollectionFailure(error)));
  };
};
