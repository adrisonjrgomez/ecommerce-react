import ShopTypesActions from "./shop.types";

const INITIAL_DATA = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};

const shopReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case ShopTypesActions.SET_COLLECTION_DATA:
      return {
        ...state,
        collections: action.payload,
      };
    case ShopTypesActions.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case ShopTypesActions.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };
    case ShopTypesActions.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
