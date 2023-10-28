import { useLocation, useParams } from "react-router-dom";
import { fetchCharacter, fetchConnectedHomeworld, fetchConnectedVehicles } from "../api/api";
import { useQuery } from "react-query";
import { Character } from "../models/character.model";
import { EntityInfo } from "../components/EntityInfo/EntityInfo";
import { Spinner } from "../components/Spinner/Spinner";
import { ErrorPage } from "./ErrorPage";
import { Path } from "../models/path.model";
import { extractPathParam } from "../utils/extractPathParam";
import { ConnectedEntityQuery } from "../components/ConnectedEntity/ConnectedEntityQuery";
import { Vehicle } from "../models/vehicle.model";
import { Homeworld } from "../models/homeworld.model";

export function CharacterDetails() {
  const { id } = useParams();
  const location = useLocation();
  const { data, isLoading, error } = useQuery(["character", id], () => fetchCharacter(id!), {});

  if (isLoading) return <Spinner />;
  if (error) return <ErrorPage />;

  const character = data?.data as Character;

  const path = extractPathParam(location.pathname as Path);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "1000px" }}>
        <EntityInfo entity={character} index={Number(id)} path={path as Path} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
            gap: "20px",
          }}>
          {character.homeworld && (
            <ConnectedEntityQuery<Homeworld>
              urls={character.homeworld}
              fetchFunction={fetchConnectedHomeworld as () => Promise<Homeworld>}
              path="planets"
              entityName="Planets"
            />
          )}
          {character.vehicles.length > 0 && (
            <ConnectedEntityQuery<Vehicle[]>
              urls={character.vehicles}
              fetchFunction={fetchConnectedVehicles as () => Promise<Vehicle[]>}
              path="vehicles"
              entityName="Vehicles"
            />
          )}
        </div>
      </div>
    </div>
  );
}
