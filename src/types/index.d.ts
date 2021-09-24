export interface StarWarsCharacter {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}
export interface StarWarsMovie {
  characters: string[];
  created: string;
  director: string;
  edited: string;
  episode_id: number;
  opening_crawl: string;
  planets: string[];
  producer: string;
  release_date: string;
  species: string[];
  starships: string[];
  title: string;
  vehicles: string[];
  url: string;
}

export interface StarWarsCharacterMovies {
  title: string;
}

export interface StarWarsResponseData {
  results: Array<StarWarsCharacter>;
  next: string | null;
}

export interface StarWarsMoviesResponseData {
  results: Array<StarWarsMovie>;
}

export interface StarWarsStateType {
  characterReducer: StarWarsCharacterStateType;
  moviesReducer: StarWarsMoviesStateType;
}

export interface StarWarsCharacterStateType {
  characters: StarWarsCharacter[];
  loading: boolean;
  next: string | null;
}

export interface StarWarsMoviesStateType {
  movies: Array<StarWarsMovie>;
  loading: boolean;
}

export interface RequestApiDataAction {
  type: string;
  payload: string | null;
}

export interface ReceivedApiDataAction {
  type: string;
  payload: StarWarsResponseData | string | null;
}

export interface RequestCharacterDataAction {
  type: string;
  payload: string[];
}

export interface ReceivedCharacterDataAction {
  type: string;
  payload: Promise<StarWarsMovie[]>;
}

export interface Details {
  id: string;
  isShowing: boolean;
}
