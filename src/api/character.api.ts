import axios from "axios";
import { Character } from "../models/character.model";
import { httpService } from "./utils";

export const fetchFirstTenCharacters = async (): Promise<{
  results: Character[];
  next: string | null;
  previous: string | null;
  count: number;
}> => {
  const response = await httpService.get(`/people/?page=1`);
  const { results, next, previous, count } = response.data;
  return { results, next, previous, count };
};

export const fetchCharacter = async (id: string) => {
  const response = await httpService.get(`/people/${parseInt(id)}`);
  return response.data as Character;
};

export const fetchConnectedCharacters = async (characterUrls: string[]) => {
  const responseArray = await Promise.all(characterUrls.map((url) => axios.get(url)));
  return responseArray.map((response) => response.data) as Character[];
};

export const fetchCharactersByPage = async (page: number) => {
  const response = await httpService.get(`/people/?page=${page}`);
  return response.data as Character[];
};
