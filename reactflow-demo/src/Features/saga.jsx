import { takeEvery, put } from "redux-saga/effects";
import { addData, intData } from "./action";

export function* addfromModal(payload) {
  yield put(addData(payload));
}

export function* addfrromModal(payload) {
  yield put(intData(payload));
}

export function* watchInAsync() {
  yield takeEvery("ADDDATA", addfromModal);
  yield takeEvery("INTDATA", addfrromModal);
}
