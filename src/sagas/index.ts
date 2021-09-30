import { call, put, takeLatest, all } from "redux-saga/effects";

import { receivedAPIData, receivedCharacterMoviesData } from "../actions/index";
import { REQUEST_API_DATA, REQUEST_CHARACTER_DATA } from "../constants";
import {
  RequestApiDataAction,
  RequestCharacterDataAction,
  StarWarsMovie,
  StarWarsResponseData,
} from "../types";
import { fetchCharacter, fetchData } from "./fetchApi";

function* fetchApiData(action: RequestApiDataAction) {
  try {
    const data: StarWarsResponseData = yield call(fetchData, action.payload);

    yield put(receivedAPIData(data));
  } catch (e) {
    console.error(e);
  }
}

function* fetchCharacterData(action: RequestCharacterDataAction) {
  try {
    const data: Promise<StarWarsMovie[]> = yield call(
      fetchCharacter,
      action.payload
    );

    yield put(receivedCharacterMoviesData(data));
  } catch (e) {
    console.error(e);
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(REQUEST_API_DATA, fetchApiData),
    takeLatest(REQUEST_CHARACTER_DATA, fetchCharacterData),
  ]);
}
