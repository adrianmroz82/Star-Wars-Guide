import axios from "axios";
import { Character } from "../models/character.model";
import { httpService } from "./utils";

export const fetchCharacter = async (id: string): Promise<Character> => {
  const response = await httpService.get(`/people/${parseInt(id)}`);
  return response.data as Character;
};

export const fetchConnectedCharacters = async (characterUrls: string[]): Promise<Character[]> => {
  const responseArray = await Promise.all(characterUrls.map((url) => axios.get(url)));
  return responseArray.map((response) => response.data) as Character[];
};

export const fetchCharactersByPage = async (
  page: number
): Promise<{
  results: Character[];
  next: string | null;
  previous: string | null;
  count: number;
}> => {
  const response = await httpService.get(`/people/?page=${page}`);
  const { results, next, previous, count } = response.data;
  return { results, next, previous, count };
};
