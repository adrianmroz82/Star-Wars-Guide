import axios from "axios";
import { Character } from "../models/character.model";
import { httpService } from "./utils";

const fetchAllCharacters = async (page = 1, allCharacters: Character[] = []): Promise<Character[]> => {
  const response = await httpService.get(`/people/?page=${page}`);

  if (response.data.results) {
    allCharacters.push(...response.data.results);
  }

  if (response.data.next) {
    const nextPage = page + 1;
    return fetchAllCharacters(nextPage, allCharacters);
  } else {
    allCharacters.sort((a, b) => a.name.localeCompare(b.name));
    return allCharacters;
  }
};

export const fetchCharacters = async () => {
  const allCharacters = await fetchAllCharacters();
  return allCharacters;
};

export const fetchCharacter = async (id: string) => {
  const response = await httpService.get(`/people/${parseInt(id)}`);
  return response.data as Character;
};

export const fetchConnectedCharacters = async (characterUrls: string[]) => {
  const responseArray = await Promise.all(characterUrls.map((url) => axios.get(url)));
  return responseArray.map((response) => response.data) as Character[];
};

// pagination

export const fetchCharactersByPage = async (page: number) => {
  const response = await httpService.get(`/people/?page=${page}`);
  return response.data as Character[];
};
