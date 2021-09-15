import { StarWarsResponseData } from "../types";

export async function fetchData(
  query: string | null
): Promise<StarWarsResponseData> {
  const url = query ? query : "https://swapi.dev/api/people/";
  const response = await fetch(url);

  return await response.json()
}
