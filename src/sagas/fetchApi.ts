import axios from "axios";
import { StarWarsData } from "../types/starWars";

export async function fetchData(): Promise<StarWarsData> {
  const url = "https://swapi.dev/api/people/";

  return await axios.get(url);
}
