import { Link } from "react-router-dom";
// import classes from "./LinkedEntities.module.scss";

export const LinkedEntities = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">People</Link>
        </li>
        <li>
          <Link to="/vehicles">Vehicles</Link>
        </li>
        <li>
          <Link to="/planets">Planets</Link>
        </li>
      </ul>
    </div>
  );
};
