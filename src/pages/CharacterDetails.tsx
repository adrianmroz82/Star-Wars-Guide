import { useLocation, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { ConnectedEntityQuery } from "../components/ConnectedEntity/ConnectedEntityQuery";
import EntityDetails from "../components/EntityDetails/EntityDetails";
import { Path } from "../models/path.model";
import { extractPathParam } from "../utils/extractPathParam";
import { Spinner } from "../components/Spinner/Spinner";
import { ErrorPage } from "./ErrorPage";
import { Homeworld } from "../models/homeworld.model";
import { Vehicle } from "../models/vehicle.model";
import { fetchCharacter } from "../api/character.api";
import { fetchConnectedHomeworld } from "../api/homeworld.api";
import { fetchConnectedVehicles } from "../api/vehicle.api";

export function CharacterDetails() {
  const { id } = useParams();
  const location = useLocation();

  const { data: character, isLoading, error } = useQuery(["character", id], () => fetchCharacter(id!), {});

  if (isLoading) return <Spinner />;
  if (error) return <ErrorPage />;

  const path = extractPathParam(location.pathname as Path);

  const entityContent = (
    <>
      {character!.homeworld && (
        <ConnectedEntityQuery<Homeworld>
          urls={character!.homeworld}
          fetchFunction={fetchConnectedHomeworld as () => Promise<Homeworld>}
          path="planets"
          entityName="Planets"
        />
      )}
      {character!.vehicles.length > 0 && (
        <ConnectedEntityQuery<Vehicle[]>
          urls={character!.vehicles}
          fetchFunction={fetchConnectedVehicles as () => Promise<Vehicle[]>}
          path="vehicles"
          entityName="Vehicles"
        />
      )}
    </>
  );

  return <EntityDetails path={path as Path} id={id!} entity={character!} entityContent={entityContent} />;
}
