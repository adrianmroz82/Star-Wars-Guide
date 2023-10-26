import { Character } from "../../models/character.model";
import { CharacterAsset } from "../CharacterAsset/CharacterAsset";

interface Props {
  character: Character;
}

export const CharacterInfo = ({ character }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        background: "#FFF",
        borderRadius: "4px",
        height: "300px",
      }}>
      <CharacterAsset />
      <div
        style={{
          flex: "5",
          padding: "32px",
        }}>
        <h2
          style={{
            fontSize: "32px",
            fontWeight: 600,
          }}>
          {character.name}
        </h2>
        <div
          style={{
            fontWeight: 500,
            color: "grey",
          }}>
          <p>Birth Year: {character.birth_year}</p>
          <p>Eye color: {character.eye_color}</p>
          <p>Gender: {character.gender}</p>
          <p>Skin color: {character.skin_color}</p>
        </div>
      </div>
    </div>
  );
};
