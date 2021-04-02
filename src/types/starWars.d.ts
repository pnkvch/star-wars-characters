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

export interface StarWarsData {
  results: Array<StarWarsCharacter>;
  next: string | null;
}

interface StarWarsStateType {
  characters: StarWarsCharacter[];
  loading: boolean;
  next: string | null;
}

interface AxiosResponse {
  data: StarWarsData;
}

interface RequestApiDataAction {
  type: string;
  payload: string | null;
}

interface ReceiveApiDataAction {
  type: string;
  payload: StarWarsData | string | null;
}
