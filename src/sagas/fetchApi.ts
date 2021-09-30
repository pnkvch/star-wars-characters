import { StarWarsMovie, StarWarsResponseData } from "../types";

export async function fetchData(
  query: string | null
): Promise<StarWarsResponseData> {
  const url = query ? query : "https://swapi.dev/api/people/";
  const response = await fetch(url);

  return await response.json();
}

export async function fetchCharacter(
  movies: string[]
): Promise<StarWarsMovie[]> {
  const requests: Promise<StarWarsMovie>[] = movies.map(async (item) => {
    const x = await fetch(item);
    return await x.json();
  });

  return await Promise.all(requests);
}
