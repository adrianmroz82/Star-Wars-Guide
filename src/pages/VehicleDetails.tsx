import { useLocation, useParams } from "react-router-dom";
import { fetchVehicle } from "../api/api";
import { useQuery } from "react-query";
import { Spinner } from "../components/Spinner/Spinner";
import { ErrorPage } from "./ErrorPage";
import { EntityInfo } from "../components/EntityInfo/EntityInfo";
import { Path } from "../models/path.model";
import { ConnectedEntityPeople } from "../components/ConnectedEntity/ConnectedEntityPeople";
import { extractPathParam } from "../utils/extractPathParam";

export function VehicleDetails() {
  const { id } = useParams();
  const location = useLocation();

  const { data: vehicle, isLoading, error } = useQuery(["vehicle", id], () => fetchVehicle(id!), {});

  if (isLoading) return <Spinner />;
  if (error) return <ErrorPage />;

  const path = extractPathParam(location.pathname as Path);
  console.log(vehicle);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "1000px" }}>
        <EntityInfo entity={vehicle!} index={Number(id)} path={path as Path} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
            gap: "20px",
          }}>
          {vehicle!.pilots!.length > 0 && <ConnectedEntityPeople urls={vehicle!.pilots!} />}
        </div>
      </div>
    </div>
  );
}
