import {
  RequestApiDataAction,
  ReceiveApiDataAction,
  StarWarsData
} from "../types/starWars";

export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVED_API_DATA = "RECEIVED_API_DATA";

export const requestApiData = (query: string | null): RequestApiDataAction => {
  return {
    type: REQUEST_API_DATA,
    payload: query
  };
};

export const receivedApiData = (data: StarWarsData): ReceiveApiDataAction => {
  return {
    type: RECEIVED_API_DATA,
    payload: data
  };
};
