import { all } from "redux-saga/effects";
import { watchInAsync } from "./saga";

export default function* rootSaga() {
  yield all([
    watchInAsync(),
    // Add other sagas here if needed
  ]);
}
