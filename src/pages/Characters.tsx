import { useQuery } from "react-query";
import { Character } from "../models/character.model";
import { fetchFirstTenCharacters } from "../api/api";
import { Card } from "../components/Card/Card";

export function Characters() {
  const { data, isLoading, error } = useQuery("characters", fetchFirstTenCharacters, {
    staleTime: 60000 * 5,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error:</div>;

  const characters = data?.data.results as Character[];

  return (
    <div
      style={{
        display: "flex",
        flexFlow: "row wrap",
        width: "80%",
        border: "1px solid green",
        margin: "0 auto",
      }}>
      <h1 style={{ color: "#FFF" }}>Star Wars Characters</h1>
      <ul>
        {characters.map((character, index) => (
          <Card key={index} character={character} index={index} />
        ))}
      </ul>
    </div>
  );
}
