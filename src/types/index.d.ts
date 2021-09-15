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

interface StarWarsFilmResponseData {
  title: string;
}

export interface StarWarsResponseData {
  results: Array<StarWarsCharacter>;
  next: string | null;
}

interface StarWarsStateType {
  characters: StarWarsCharacter[];
  loading: boolean;
  next: string | null;
}

interface AxiosFilmsResponse {
  data: StarWarsFilmResponseData;
}

interface RequestApiDataAction {
  type: string;
  payload: string | null;
}

interface ReceiveApiDataAction {
  type: string;
  payload: StarWarsResponseData | string | null;
}

interface Details {
  id: string;
  isShowing: boolean;
}
