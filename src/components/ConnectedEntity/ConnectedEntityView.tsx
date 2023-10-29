import { Link } from "react-router-dom";
import { Spinner } from "../Spinner/Spinner";
import { Homeworld } from "../../models/homeworld.model";
import { Vehicle } from "../../models/vehicle.model";
import { Character } from "../../models/character.model";
import { extractRouteId } from "../../utils/extractRouteId";

import classes from "./ConnectedEntityView.module.scss";

interface Props {
  data: Homeworld | Vehicle[] | Character[];
  isLoading: boolean;
  path: string;
  entityName: string;
}

export function ConnectedEntityView({ data, isLoading, path, entityName }: Props) {
  if (isLoading) return <Spinner />;

  const entityData = Array.isArray(data) ? data : [data];

  return (
    <div className={classes.wrapper}>
      <p className={classes.headerSection}>Connected {entityName}</p>
      <hr />
      <div className={classes.entitiesList}>
        {entityData.map((item) => (
          <div key={item.name} className={classes.entityContainer}>
            <Link key={item.name} className={classes.entityName} to={`/${path}/${extractRouteId(item)}`}>
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
