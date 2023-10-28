import { fetchFirstTenPlanets } from "../api/api";

import { GenericPage } from "../components/GenericPage/GenericPage";
import { Homeworld } from "../models/homeworld.model";

export function Planets() {
  return <GenericPage<Homeworld[]> queryKey="planets" fetchFunction={fetchFirstTenPlanets} path="planets" />;
}
