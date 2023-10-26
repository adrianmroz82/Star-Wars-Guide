import { useParams } from "react-router-dom";
import { fetchCharacter } from "../api/api";
import { useQuery } from "react-query";
import { Character } from "../models/character.model";
import { CharacterInfo } from "../components/CharacterInfo/CharacterInfo";

export function CharacterDetails() {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery(["character", id], () => fetchCharacter(id!), {});

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error:</div>;

  const character = data?.data as Character;

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "1000px" }}>
        <CharacterInfo character={character} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
            gap: "20px",
          }}>
          {/* {selectedCharacter.vehicles.length > 0 && (
            <ConnectedData header="Connected Vehicles" path="vehicles" />
          )}
          {selectedCharacter.homeworld && (
            <ConnectedData header="Connected Homeworld" path="planets" />
          )} */}
        </div>
      </div>
    </div>
  );
}
