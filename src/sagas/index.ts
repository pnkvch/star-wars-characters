import { call, put, takeLatest } from "redux-saga/effects";

import { REQUEST_API_DATA, receivedApiData } from "../actions/index";
import { StarWarsData } from "../types/starWars";
import { fetchData } from "./fetchApi";

interface AxiosResponse {
  data: StarWarsData;
}

function* fetchApiData() {
  try {
    const { data }: AxiosResponse = yield call(fetchData);
    console.log(data);

    yield put(receivedApiData(data.results));
  } catch (e) {
    console.log(e);
  }
}

export default function* rootSaga() {
  yield takeLatest(REQUEST_API_DATA, fetchApiData);
}
