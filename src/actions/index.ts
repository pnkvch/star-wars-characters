import {
  RECEIVED_API_DATA,
  RECEIVED_CHARACTER_DATA,
  REQUEST_API_DATA,
  REQUEST_CHARACTER_DATA,
} from "../constants";
import {
  RequestApiDataAction,
  ReceivedApiDataAction,
  StarWarsResponseData,
  RequestCharacterDataAction,
  ReceivedCharacterDataAction,
  StarWarsMovie,
} from "../types";

export const requestAPIData = (query: string | null): RequestApiDataAction => {
  return {
    type: REQUEST_API_DATA,
    payload: query,
  };
};
export const requestCharacterMoviesData = (
  query: string[]
): RequestCharacterDataAction => {
  return {
    type: REQUEST_CHARACTER_DATA,
    payload: query,
  };
};

export const receivedAPIData = (
  data: StarWarsResponseData
): ReceivedApiDataAction => {
  return {
    type: RECEIVED_API_DATA,
    payload: data,
  };
};

export const receivedCharacterMoviesData = (
  data: Promise<StarWarsMovie[]>
): ReceivedCharacterDataAction => {
  return {
    type: RECEIVED_CHARACTER_DATA,
    payload: data,
  };
};
