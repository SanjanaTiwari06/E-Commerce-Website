import { put, takeEvery } from "redux-saga/effects";
import {
  CREATE_WISHLIST,
  CREATE_WISHLIST_RED,
  GET_WISHLIST,
  GET_WISHLIST_RED,
  DELETE_WISHLIST,
  DELETE_WISHLIST_RED,
} from "../Constant";

import {
  CreateRecord,
  GetRecord,
  DeleteRecord,
} from "./Services";

function* CreateSaga(action) {
  let response = yield CreateRecord("wishlist", action.payload);
  yield put({
    type: CREATE_WISHLIST_RED,
    payload: response,
  });
}

function* GetSaga() {
  let response = yield GetRecord("wishlist");
  yield put({
    type: GET_WISHLIST_RED,
    payload: response,
  });
}

function* DeleteSaga(action) {
  yield DeleteRecord("wishlist", action.payload);
  yield put({
    type: DELETE_WISHLIST_RED,
    payload: action.payload,
  });
}

export default function* WishlistSaga() {
  yield takeEvery(CREATE_WISHLIST, CreateSaga);
  yield takeEvery(GET_WISHLIST, GetSaga);
  yield takeEvery(DELETE_WISHLIST, DeleteSaga);
}