import { Link } from "react-router-dom";
import { EntityAsset } from "../EntityAsset/EntityAsset";
import { Character } from "../../models/character.model";
import { Vehicle } from "../../models/vehicle.model";
import { Homeworld } from "../../models/homeworld.model";
import { Path } from "../../models/shared.model";

import classes from "./Card.module.scss";

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
          <EntityAsset path={path} index={index} border={true} />
        </div>
        <div className={classes.textContainer}>
          {entityData.map((entity) => (
            <h2 data-testid="cardEntityName" key={entity.name}>
              {entity.name}
            </h2>
          ))}
        </div>
      </div>
    </Link>
  );
}
