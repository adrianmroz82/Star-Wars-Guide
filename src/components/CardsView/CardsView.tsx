import { Character } from "../../models/character.model";
import { Homeworld } from "../../models/homeworld.model";
import { Path } from "../../models/path.model";
import { Vehicle } from "../../models/vehicle.model";
import { extractRouteId } from "../../utils/extractRouteId";
import { Card } from "../Card/Card";

import classes from "./CardsView.module.scss";

type Entity = Character | Vehicle | Homeworld;

interface Props {
  data: Entity[];
  path: Path;
}

export const CardsView = ({ data, path }: Props) => {
  const id = extractRouteId(data);

  return (
    <div className={classes.cardsView} data-testid="cardsView">
      {data.map((el, index) => (
        <Card path={path} key={index} data={el} index={id[index]} />
      ))}
    </div>
  );
};
