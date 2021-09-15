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

export interface StarWarsFilmResponseData {
  title: string;
}

export interface StarWarsResponseData {
  results: Array<StarWarsCharacter>;
  next: string | null;
}

export interface StarWarsStateType {
  characters: StarWarsCharacter[];
  loading: boolean;
  next: string | null;
}

export interface AxiosFilmsResponse {
  data: StarWarsFilmResponseData;
}

export interface RequestApiDataAction {
  type: string;
  payload: string | null;
}

export interface ReceiveApiDataAction {
  type: string;
  payload: StarWarsResponseData | string | null;
}

export interface Details {
  id: string;
  isShowing: boolean;
}
