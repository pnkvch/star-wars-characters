import axios from "axios";
import { StarWarsData } from "../types/starWars";

export async function fetchData(query: string | null): Promise<StarWarsData> {
  const url = query ? query : "https://swapi.dev/api/people/";

  return await axios.get(url);
}
