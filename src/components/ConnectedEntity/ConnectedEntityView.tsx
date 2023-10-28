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
      <div className={classes.headerSection}>
        <p>Connected {entityName}</p>
        <hr />
      </div>
      <div className={classes.vehicleList}>
        {entityData.map((item) => (
          <div key={item.name} className={classes.vehicleContainer}>
            <div className={classes.vehicleAvatar} />
            <div className={classes.vehicleName} key={item.name}>
              <Link to={`/${path}/${extractRouteId(item)}`}>{item.name}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
