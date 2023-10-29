import { fetchHomeworlds } from "../api/homeworld.api";

import { GenericPage } from "../components/GenericPage/GenericPage";
import { Homeworld } from "../models/homeworld.model";

export function Planets() {
  return <GenericPage<Homeworld[]> queryKey="planets" fetchFunction={fetchHomeworlds} path="planets" />;
}
