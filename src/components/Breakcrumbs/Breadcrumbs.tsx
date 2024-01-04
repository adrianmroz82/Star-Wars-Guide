import { Link, useLocation } from "react-router-dom";

export function Breadcrumbs() {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter((segment) => segment !== "");

  return (
    <div>
      {pathSegments.map((segment, index, array) => (
        <span key={segment}>
          <Link to={`/${array.slice(0, index + 1).join("/")}`}>{segment}</Link>
          {index < array.length - 1 && " > "}
        </span>
      ))}
    </div>
  );
}
