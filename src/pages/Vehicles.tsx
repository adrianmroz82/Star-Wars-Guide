import { fetchVehiclesByPage } from "../api/vehicle.api";
import { GenericPage } from "../components/GenericPage/GenericPage";
import { ResponseResult } from "../models/shared.model";

export function Vehicles() {
  return <GenericPage<ResponseResult> queryKey="vehicles" fetchFunction={fetchVehiclesByPage} path="vehicles" />;
}
