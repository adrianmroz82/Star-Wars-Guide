import { useLocation, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { ConnectedEntityQuery } from "../components/ConnectedEntity/ConnectedEntityQuery";
import { Character } from "../models/character.model";
import EntityDetails from "../components/EntityDetails/EntityDetails";
import { Path } from "../models/path.model";
import { extractPathParam } from "../utils/extractPathParam";
import { Spinner } from "../components/Spinner/Spinner";
import { ErrorPage } from "./ErrorPage";
import { fetchVehicle } from "../api/vehicle.api";
import { fetchConnectedCharacters } from "../api/character.api";

export function VehicleDetails() {
  const { id } = useParams();
  const location = useLocation();

  const { data: vehicle, isLoading, error } = useQuery(["vehicles", id], () => fetchVehicle(id!), {});

  if (isLoading) return <Spinner />;
  if (error) return <ErrorPage />;

  const path = extractPathParam(location.pathname as Path);

  const entityContent = vehicle!.pilots!.length > 0 && (
    <ConnectedEntityQuery<Character[]>
      urls={vehicle!.pilots}
      fetchFunction={fetchConnectedCharacters as () => Promise<Character[]>}
      path="people"
      entityName="Characters"
    />
  );

  return <EntityDetails path={path as Path} id={id!} entity={vehicle!} entityContent={entityContent} />;
}
