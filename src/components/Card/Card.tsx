import { Link } from "react-router-dom";
import { EntityAsset } from "../CharacterAsset/CharacterAsset";
import { Character } from "../../models/character.model";
import { Vehicle } from "../../models/vehicle.model";
import { Homeworld } from "../../models/homeworld.model";
import { Path } from "../../models/path.model";

type EntityType = Pick<Character | Vehicle | Homeworld, "name" | "url">;

interface Props {
  data: EntityType;
  index: number;
  path: Path;
}

export function Card({ data, index, path }: Props) {
  const entityData = Array.isArray(data) ? data : [data];

  return (
    <Link
      style={{
        textDecoration: "none",
        display: "inline-block",
        width: "20%",
        margin: "20px 0",
      }}
      to={`/${path}/${index}`}>
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
          <EntityAsset path={path} index={index} />
        </div>
        <div
          style={{
            color: "gray",
            fontSize: "16px",
          }}>
          {entityData.map((item) => (
            <h2 key={item.name}>{item.name}</h2>
          ))}
        </div>
      </div>
    </Link>
  );
}
