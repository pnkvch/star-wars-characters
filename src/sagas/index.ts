import { call, put, takeLatest } from "redux-saga/effects";

import { REQUEST_API_DATA, receivedApiData } from "../actions/index";
import { RequestApiDataAction, StarWarsResponseData } from "../types";
import { fetchData } from "./fetchApi";

function* fetchApiData(action: RequestApiDataAction) {
  try {
    const data: StarWarsResponseData = yield call(
      fetchData,
      action.payload
    );

    yield put(receivedApiData(data));
  } catch (e) {
    console.error(e);
  }
}

export default function* rootSaga() {
  yield takeLatest(REQUEST_API_DATA, fetchApiData);
}
