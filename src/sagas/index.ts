import { call, put, takeLatest } from "redux-saga/effects";

import { REQUEST_API_DATA, receivedApiData } from "../actions/index";
import { AxiosCharacterResponse, RequestApiDataAction } from "../types";
import { fetchData } from "./fetchApi";

function* fetchApiData(action: RequestApiDataAction) {
  try {
    const { data }: AxiosCharacterResponse = yield call(
      fetchData,
      action.payload
    );
    console.log(data);

    yield put(receivedApiData(data));
  } catch (e) {
    console.log(e);
  }
}

export default function* rootSaga() {
  yield takeLatest(REQUEST_API_DATA, fetchApiData);
}
