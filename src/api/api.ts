import axios from "axios";
import { SWAPI_BASE_URL } from "./shared";

// note: final version of fetching all characters
// const fetchAllCharacters = async (page = 1, allCharacters: Character[] = []) => {
//   const response = await axios.get(`${SWAPI_URL}/people/?page=${page}`);

//   if (response.data.results) {
//     allCharacters.push(...response.data.results);
//   }

//   if (response.data.next) {
//     const nextPage = page + 1;
//     return fetchAllCharacters(nextPage, allCharacters);
//   } else {
//     return allCharacters;
//   }
// };

// export const fetchCharacters = async () => {
//   const allCharacters = await fetchAllCharacters();
//   return allCharacters;
// };

export const fetchFirstTenCharacters = () => {
  return axios.get(`${SWAPI_BASE_URL}/people`);
};

export const fetchCharacter = (id: string) => {
  return axios.get(`${SWAPI_BASE_URL}/people/${parseInt(id) + 1}`);
};


// note: destructured version proposal
// export const fetchFirstTenCharacters = async () => {
//   const response = await axios.get(`${SWAPI_BASE_URL}/people`);
//   return response.data.results;
// };

// export const fetchCharacter = async (id: string) => {
//   const response = await axios.get(`${SWAPI_BASE_URL}/people/${parseInt(id) + 1}`);
//   return response.data;
// };
