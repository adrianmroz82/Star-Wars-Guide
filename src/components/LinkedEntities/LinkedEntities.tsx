import { Link, useLocation } from "react-router-dom";

import classes from "./LinkedEntities.module.scss";

export const LinkedEntities = () => {
  const location = useLocation();

  function isActive(path: string | string[]) {
    if (Array.isArray(path)) {
      return path.some((p) => location.pathname.endsWith(p) || location.pathname.startsWith("/people"));
    }
    return location.pathname.startsWith(path);
  }

  function activeLink(path: string | string[]) {
    return `${classes["linkedEntity"]} ${isActive(path) ? classes["activeLink"] : ""}`;
  }

  return (
    <div className={classes.linkedEntities}>
      <ul>
        <li>
          <Link to="/" className={activeLink(["/"])}>
            People
          </Link>
        </li>
        <li>
          <Link to="/vehicles" className={activeLink("/vehicles")}>
            Vehicles
          </Link>
        </li>
        <li>
          <Link to="/planets" className={activeLink("/planets")}>
            Planets
          </Link>
        </li>
      </ul>
    </div>
  );
};
