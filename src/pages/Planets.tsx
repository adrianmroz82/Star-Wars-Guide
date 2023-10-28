import { useQuery } from "react-query";
import { fetchFirstTenPlanets } from "../api/api";
import { CardsView } from "../components/CardsView/CardsView";

export function Planets() {
  const { data: planets, isLoading, error } = useQuery("planets", fetchFirstTenPlanets, {});

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error:</div>;

  return <CardsView data={planets!} path="planets" />;
}
