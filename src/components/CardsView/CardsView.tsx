import { Character } from "../../models/character.model";
import { Homeworld } from "../../models/homeworld.model";
import { Path } from "../../models/path.model";
import { Vehicle } from "../../models/vehicle.model";
import { extractRouteId } from "../../utils/extractRouteId";
import { Card } from "../Card/Card";

type Entity = Pick<Character | Vehicle | Homeworld, "name" | "url">;

interface Props {
  data: Entity[];
  path: Path;
}

export const CardsView = ({ data, path }: Props) => {
  const id = extractRouteId(data);

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
        {data.map((el, index) => (
          <Card path={path} key={index} data={el} index={id[index]} />
        ))}
      </ul>
    </div>
  );
};
