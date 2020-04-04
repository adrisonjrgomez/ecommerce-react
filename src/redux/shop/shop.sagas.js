import { takeLatest, call, put, all } from "redux-saga/effects";

import {
  firestore,
  convertCollectionSnapshopToMap,
} from "../../firebase/firebase.utils";

import { fetchCollectionFailure, fetchCollectionSuccess } from "./shop.actions";
import ShopTypesActions from "./shop.types";

export function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapShot = yield collectionRef.get();
    const result = yield call(convertCollectionSnapshopToMap, snapShot);
    yield put(fetchCollectionSuccess(result));
  } catch (err) {
    yield put(fetchCollectionFailure(err.message));
  }
}

function* fetchCollectionStart() {
  yield takeLatest(
    ShopTypesActions.FETCH_COLLECTIONS_START,
    fetchCollectionAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionStart)]);
}
