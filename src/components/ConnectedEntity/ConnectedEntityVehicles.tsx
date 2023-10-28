import { useQuery } from "react-query";
import { fetchConnectedVehicles } from "../../api/api";
import { ConnectedEntity } from "./ConnectedEntity";
import { Vehicle } from "../../models/vehicle.model";

interface Props {
  urls: string[];
}

export const ConnectedEntityVehicles = ({ urls }: Props) => {
  const { data: vehicles, isLoading } = useQuery(["vehicles", urls], () => fetchConnectedVehicles(urls));
  const path = "vehicles";

  return <ConnectedEntity data={vehicles as Vehicle[]} isLoading={isLoading} path={path} entityName="Vehicles" />;
};
