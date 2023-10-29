import { fetchVehicles } from "../api/vehicle.api";
import { GenericPage } from "../components/GenericPage/GenericPage";
import { Vehicle } from "../models/vehicle.model";

export function Vehicles() {
  return <GenericPage<Vehicle[]> queryKey="vehicles" fetchFunction={fetchVehicles} path="vehicles" />;
}
