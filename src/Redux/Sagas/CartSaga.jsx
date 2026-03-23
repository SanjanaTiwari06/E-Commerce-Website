import { takeEvery, put } from "redux-saga/effects";
import {
  CREATE_CART,
  CREATE_CART_RED,
  GET_CART,
  GET_CART_RED,
  DELETE_CART,
  DELETE_CART_RED,
  UPDATE_CART,
  UPDATE_CART_RED,
} from "../Constant";

import {
  CreateRecord,
  GetRecord,
  UpdateRecord,
  DeleteRecord,
} from "./Services";

function* CreateSaga(action) {
  let response = yield CreateRecord(
    "cart",
    action.payload
  );
  yield put({ type: CREATE_CART_RED, payload: response });
}

function* GetSaga() {
  let response = yield GetRecord("cart");
  yield put({
    type: GET_CART_RED,
    payload: response,
  });
}

function* UpdateSaga(action) {
  yield UpdateRecord("cart", action.payload);
  yield put({
    type: UPDATE_CART_RED,
    payload: action.payload,
  });
}
function* DeleteSaga(action) {
  yield DeleteRecord("cart", action.payload);
  yield put({
    type: DELETE_CART_RED,
    payload: action.payload,
  });
}

export default function* CartSaga() {
  yield takeEvery(CREATE_CART, CreateSaga);
  yield takeEvery(GET_CART, GetSaga);
  yield takeEvery(UPDATE_CART, UpdateSaga);
  yield takeEvery(DELETE_CART, DeleteSaga);
}