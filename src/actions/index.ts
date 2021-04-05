import {
  RequestApiDataAction,
  ReceiveApiDataAction,
  StarWarsResponseData
} from "../types";

export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVED_API_DATA = "RECEIVED_API_DATA";

export const requestApiData = (query: string | null): RequestApiDataAction => {
  return {
    type: REQUEST_API_DATA,
    payload: query
  };
};

export const receivedApiData = (
  data: StarWarsResponseData
): ReceiveApiDataAction => {
  return {
    type: RECEIVED_API_DATA,
    payload: data
  };
};
