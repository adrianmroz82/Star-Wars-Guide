import { Link } from "react-router-dom";
import { Spinner } from "../Spinner/Spinner";

import classes from "./ConnectedEntity.module.scss";
import { Homeworld } from "../../models/homeworld.model";
import { Vehicle } from "../../models/vehicle.model";

interface Entity {
  name: string;
}

interface Props<T> {
  data: Homeworld | Vehicle[];
  isLoading: boolean;
  path: string;
  entityName: string;
  // generateLink: (data: T) => string;
}

export function ConnectedEntity<T extends Entity>({
  data,
  isLoading,
  path,
  entityName,
}: // generateLink
Props<T>) {
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
              {item.name}
              {/* <Link to={`/${path}/${generateLink(item)}`}>{item.name}</Link> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
