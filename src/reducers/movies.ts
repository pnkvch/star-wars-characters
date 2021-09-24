import { PayloadAction } from "@reduxjs/toolkit";
import { RECEIVED_CHARACTER_DATA, REQUEST_CHARACTER_DATA } from "../actions";
import { StarWarsMovie, StarWarsMoviesStateType } from "../types";

let initialMovieState: StarWarsMoviesStateType = {
  movies: [],
  loading: true,
};

export let moviesReducer = (
  state = initialMovieState,
  action: PayloadAction<Promise<StarWarsMovie>[]>
) => {
  switch (action.type) {
    case REQUEST_CHARACTER_DATA:
      return {
        movies: [],
        loading: true,
      };
    case RECEIVED_CHARACTER_DATA:
      return {
        movies: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
