import axios from "axios";
import { SWAPI_BASE_URL } from "./shared";
import { Vehicle } from "../models/vehicle.model";
import { Homeworld } from "../models/homeworld.model";

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

// export const fetchConnectedVehicles = (vehicleUrls: string[]) => {
//   console.log("vehicleUrls", vehicleUrls);
//   return Promise.all(vehicleUrls.map((url) => axios.get(url)));
// };

export const fetchConnectedVehicles = async (dataUrls: string[]) => {
  const responseArray = await Promise.all(dataUrls.map((url) => axios.get(url)));
  return responseArray.map((response) => response.data) as Vehicle[];
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

export const fetchConnectedHomeworld = async (homeworldUrl: string) => {
  const response = await axios.get(homeworldUrl);
  return response.data as Homeworld;
};

export const fetchVehicle = async (vehicleId: string) => {
  const response = await axios.get(`${SWAPI_BASE_URL}/vehicles/${parseInt(vehicleId)}`);
  return response.data as Vehicle;
};

export const fetchHomeworld = async (homeworldId: string) => {
  const response = await axios.get(`${SWAPI_BASE_URL}/planets/${parseInt(homeworldId)}`);
  return response.data as Homeworld;
};
