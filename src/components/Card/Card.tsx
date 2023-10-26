import { Link } from "react-router-dom";
import { CharacterAsset } from "../CharacterAsset/CharacterAsset";
import { Character } from "../../models/character.model";

interface Props {
  character: Character;
  index: number;
}

export function Card({ character, index }: Props) {
  return (
    <Link
      style={{
        textDecoration: "none",
        display: "inline-block",
        width: "20%",
        margin: "20px 0",
      }}
      to={`/character/${index}`}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "350px",
          width: "90%",
          justifyContent: "center",
          backgroundColor: "#FFF",
        }}>
        <div
          style={{
            height: "90%",
            width: "100%",
            backgroundColor: "gray",
            color: "#000",
          }}>
          <CharacterAsset />
        </div>
        <div
          style={{
            color: "gray",
          }}>
          <h2>{character.name}</h2>
        </div>
      </div>
    </Link>
  );
}
