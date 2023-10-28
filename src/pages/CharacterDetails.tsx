import { useLocation, useParams } from "react-router-dom";
import { fetchCharacter } from "../api/api";
import { useQuery } from "react-query";
import { Character } from "../models/character.model";
import { EntityInfo } from "../components/EntityInfo/EntityInfo";
import { Spinner } from "../components/Spinner/Spinner";
import { ErrorPage } from "./ErrorPage";
import { ConnectedEntityHomeland } from "../components/ConnectedEntity/ConnectedEntityHomeworld";
import { ConnectedEntityVehicles } from "../components/ConnectedEntity/ConnectedEntityVehicles";
import { Path } from "../models/path.model";
import { extractPathParam } from "../utils/extractPathParam";

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
          {character.homeworld && <ConnectedEntityHomeland url={character.homeworld} />}
          {character.vehicles.length > 0 && <ConnectedEntityVehicles urls={character.vehicles} />}
        </div>
      </div>
    </div>
  );
}
