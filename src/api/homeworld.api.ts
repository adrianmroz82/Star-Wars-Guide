import axios from "axios";
import { Homeworld } from "../models/homeworld.model";
import { httpService } from "./utils";

const fetchAllHomeworlds = async (page = 1, allHomeworlds: Homeworld[] = []): Promise<Homeworld[]> => {
  const response = await httpService.get(`/planets/?page=${page}`);

  if (response.data.results) {
    allHomeworlds.push(...response.data.results);
  }

  if (response.data.next) {
    const nextPage = page + 1;
    return fetchAllHomeworlds(nextPage, allHomeworlds);
  } else {
    allHomeworlds.sort((a, b) => a.name.localeCompare(b.name));
    return allHomeworlds;
  }
};

export const fetchHomeworlds = async () => {
  const allHomeworlds = await fetchAllHomeworlds();
  return allHomeworlds;
};

export const fetchConnectedHomeworld = async (homeworldUrl: string) => {
  const response = await axios.get(homeworldUrl);
  return response.data as Homeworld;
};

export const fetchHomeworld = async (homeworldId: string) => {
  const response = await httpService.get(`/planets/${parseInt(homeworldId)}`);
  return response.data as Homeworld;
};
