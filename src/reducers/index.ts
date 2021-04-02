import { PayloadAction } from "@reduxjs/toolkit";
import { RECEIVED_API_DATA, REQUEST_API_DATA } from "../actions";
import { StarWarsCharacter, StarWarsInitialType } from "../types/starWars";

let initialState: StarWarsInitialType = {
  characters: [],
  loading: true
};

export let rootReducer = (
  state = initialState,
  action: PayloadAction<StarWarsCharacter[]>
): StarWarsInitialType => {
  switch (action.type) {
    case REQUEST_API_DATA:
      return {
        ...state,
        loading: true
      };

    case RECEIVED_API_DATA:
      return {
        ...state,
        characters: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
