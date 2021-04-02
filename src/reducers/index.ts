import { PayloadAction } from "@reduxjs/toolkit";
import { RECEIVED_API_DATA, REQUEST_API_DATA } from "../actions";
import { StarWarsData, StarWarsStateType } from "../types/starWars";

let initialState: StarWarsStateType = {
  characters: [],
  loading: true,
  next: null
};

export let rootReducer = (
  state = initialState,
  action: PayloadAction<StarWarsData>
): StarWarsStateType => {
  switch (action.type) {
    case REQUEST_API_DATA:
      return {
        ...state,
        loading: true
      };

    case RECEIVED_API_DATA:
      return {
        characters: state.characters.concat(action.payload.results),
        loading: false,
        next: action.payload.next
      };
    default:
      return state;
  }
};
