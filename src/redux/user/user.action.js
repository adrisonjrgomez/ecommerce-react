import UserActionType from "./user.types";
export const setCurrentUser = (user) => ({
  type: UserActionType.SET_CURRENT_USER,
  payload: user,
});

export const googleSignInStart = () => ({
  type: UserActionType.GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (credential) => ({
  type: UserActionType.EMAIL_SIGN_IN_START,
  payload: credential,
});

export const signInSuccess = (user) => ({
  type: UserActionType.SIGN_IN_SUCCESS,
  payload: user,
});
export const signInFailure = (error) => ({
  type: UserActionType.SIGN_IN_FAILURE,
  payload: error,
});

export const signOutStart = () => ({
  type: UserActionType.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: UserActionType.SIGN_OUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: UserActionType.SIGN_OUT_FAILURE,
  payload: error,
});

export const signUpStart = userData => ({
  type: UserActionType.SIGN_UP_START,
  payload: userData,
});

export const signUpSuccess = () => ({
  type: UserActionType.SIGN_UP_SUCCESS,
});
export const signUpFailure = (error) => ({
  type: UserActionType.SIGN_UP_FAILURE,
  payload: error,
});

export const checkUser = () => ({
  type: UserActionType.CHECK_USER,
})
