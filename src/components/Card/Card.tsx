import { Link } from "react-router-dom";
import { EntityAsset } from "../EntityAsset/EntityAsset";
import { Character } from "../../models/character.model";
import { Vehicle } from "../../models/vehicle.model";
import { Homeworld } from "../../models/homeworld.model";
import { Path } from "../../models/path.model";

import classes from "./Card.module.scss";

// type EntityType = Pick<Character | Vehicle | Homeworld, "name" | "url">;
type EntityType = Character | Vehicle | Homeworld;

interface Props {
  data: EntityType;
  index: number;
  path: Path;
}

export function Card({ data, index, path }: Props) {
  const entityData = Array.isArray(data) ? data : [data];

  return (
    <Link to={`/${path}/${index}`} className={classes.card}>
      <div className={classes.cardContainer}>
        <div className={classes.imageContainer}>
          <EntityAsset path={path} index={index} />
        </div>
        <div className={classes.textContainer}>
          {entityData.map((item) => (
            <h2 key={item.name}>{item.name}</h2>
          ))}
        </div>
      </div>
    </Link>
  );
}
