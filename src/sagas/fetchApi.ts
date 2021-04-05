import axios from "axios";
import { StarWarsResponseData } from "../types";

export async function fetchData(
  query: string | null
): Promise<StarWarsResponseData> {
  const url = query ? query : "https://swapi.dev/api/people/";

  return await axios.get(url);
}
