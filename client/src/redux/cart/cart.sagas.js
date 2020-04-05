import { takeLatest, put, call, all } from "redux-saga/effects";
import { clearCartFailure, clearCartSuccess } from "./cart.action";
import { CartActionTypes } from "./cart.type";

function* onClearCart() {
  try {
    yield put(clearCartSuccess());
  } catch (error) {
    yield put(clearCartFailure());
  }
}

export function* cartClearStart() {
  yield takeLatest(CartActionTypes.CLEAR_CART_START, onClearCart);
}

export function* cartSaga() {
  yield all([call()]);
}
