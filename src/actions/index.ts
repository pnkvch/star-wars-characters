import { StarWarsCharacter } from "../types/starWars";

export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVED_API_DATA = "RECEIVED_API_DATA";

export const requestApiData = () => {
  return {
    type: REQUEST_API_DATA
  };
};

export const receivedApiData = (payload: StarWarsCharacter[]) => {
  return {
    type: RECEIVED_API_DATA,
    payload
  };
};
