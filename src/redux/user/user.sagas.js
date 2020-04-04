import { takeLatest, all, put, call } from "redux-saga/effects";
import UserActionsTypes from "./user.types";
import {
  auth,
  provider,
  createUserProfileDocument,
  getCurrentUser,
} from "../../firebase/firebase.utils";
import {
  signInFailure,
  signInSuccess,
  signOutFailure,
  signOutSuccess,
  signUpFailure,
  signUpSuccess,
} from "./user.action";
import { clearCartStart } from "../cart/cart.action";

export function* onGoogleSignIn() {
  try {
    const { user } = yield auth.signInWithPopup(provider);
    yield getUserFromSnapshot(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onEmailSignIn({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getUserFromSnapshot(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onSignOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure());
  }
}

export function* onSignUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* getUserFromSnapshot(user, additionalData) {
  try {
    const userRef = yield call(createUserProfileDocument, user, additionalData);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* isUserAunthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getUserFromSnapshot(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

// DEFINE THE ACTION LISTENERS

export function* googleSignInStart() {
  yield takeLatest(UserActionsTypes.GOOGLE_SIGN_IN_START, onGoogleSignIn);
}

export function* emailSignInStart() {
  yield takeLatest(UserActionsTypes.EMAIL_SIGN_IN_START, onEmailSignIn);
}

export function* signOutStart() {
  yield put(clearCartStart());
  yield takeLatest(UserActionsTypes.SIGN_OUT_START, onSignOut);
}

export function* signUpStart() {
  yield takeLatest(UserActionsTypes.SIGN_UP_START, onSignUp);
}

export function* checkUser() {
  yield takeLatest(UserActionsTypes.CHECK_USER, isUserAunthenticated);
}

export function* userSaga() {
  yield all([
    call(googleSignInStart),
    call(emailSignInStart),
    call(signOutStart),
    call(signUpStart),
  ]);
}
