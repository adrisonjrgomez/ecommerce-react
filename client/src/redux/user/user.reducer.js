import UserActionType from "./user.types";
const INITIAL_STATE = {
  currentUser: null,
  errorMessage: null,
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionType.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        errorMessage: null,
      };
    case UserActionType.SIGN_UP_SUCCESS:
    case UserActionType.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        errorMessage: null,
      };
    case UserActionType.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
      };
    case UserActionType.SIGN_OUT_FAILURE:
    case UserActionType.SIGN_IN_FAILURE:
      return {
        ...state,
        currentUser: null,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
