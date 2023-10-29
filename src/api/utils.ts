import axios from "axios";

export const SWAPI_BASE_URL = "https://swapi.dev/api";

export const httpService = axios.create({
  baseURL: SWAPI_BASE_URL,
});
