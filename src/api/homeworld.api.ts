import axios from "axios";
import { Homeworld } from "../models/homeworld.model";
import { httpService } from "./utils";

export const fetchConnectedHomeworld = async (homeworldUrl: string) => {
  const response = await axios.get(homeworldUrl);
  return response.data as Homeworld;
};

export const fetchHomeworld = async (homeworldId: string) => {
  const response = await httpService.get(`/planets/${parseInt(homeworldId)}`);
  return response.data as Homeworld;
};

export const fetchHomeworldsByPage = async (
  page: number
): Promise<{
  results: Homeworld[];
  next: string | null;
  previous: string | null;
  count: number;
}> => {
  const response = await httpService.get(`/planets/?page=${page}`);
  const { results, next, previous, count } = response.data;
  return { results, next, previous, count };
};
