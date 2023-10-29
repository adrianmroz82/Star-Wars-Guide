import axios from "axios";
import { Vehicle } from "../models/vehicle.model";
import { httpService } from "./utils";

const fetchAllVehicles = async (page = 1, allVehicles: Vehicle[] = []): Promise<Vehicle[]> => {
  const response = await httpService.get(`/vehicles/?page=${page}`);

  if (response.data.results) {
    allVehicles.push(...response.data.results);
  }

  if (response.data.next) {
    const nextPage = page + 1;
    return fetchAllVehicles(nextPage, allVehicles);
  } else {
    allVehicles.sort((a, b) => a.name.localeCompare(b.name));
    return allVehicles;
  }
};

export const fetchVehicles = async () => {
  const allVehicles = await fetchAllVehicles();
  return allVehicles;
};

export const fetchConnectedVehicles = async (dataUrls: string[]) => {
  const responseArray = await Promise.all(dataUrls.map((url) => axios.get(url)));
  return responseArray.map((response) => response.data) as Vehicle[];
};

export const fetchVehicle = async (vehicleId: string) => {
  const response = await httpService.get(`/vehicles/${parseInt(vehicleId)}`);
  return response.data as Vehicle;
};
