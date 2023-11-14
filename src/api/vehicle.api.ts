import axios from "axios";
import { Vehicle } from "../models/vehicle.model";
import { httpService } from "./utils";

export const fetchFirstTenVehicles = async (): Promise<{
  results: Vehicle[];
  next: string | null;
  previous: string | null;
  count: number;
}> => {
  const response = await httpService.get(`/vehicles/?page=1`);
  const { results, next, previous, count } = response.data;
  return { results, next, previous, count };
};

export const fetchConnectedVehicles = async (dataUrls: string[]) => {
  const responseArray = await Promise.all(dataUrls.map((url) => axios.get(url)));
  return responseArray.map((response) => response.data) as Vehicle[];
};

export const fetchVehicle = async (vehicleId: string) => {
  const response = await httpService.get(`/vehicles/${parseInt(vehicleId)}`);
  return response.data as Vehicle;
};

export const fetchVehiclesByPage = async (
  page: number
): Promise<{
  results: Vehicle[];
  next: string | null;
  previous: string | null;
  count: number;
}> => {
  const response = await httpService.get(`/vehicles/?page=${page}`);
  const { results, next, previous, count } = response.data;
  return { results, next, previous, count };
};
