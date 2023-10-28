import { useQuery } from "react-query";
import { fetchFirstTenVehicles } from "../api/api";
import { CardsView } from "../components/CardsView/CardsView";

export function Vehicles() {
  const { data: vehicles, isLoading, error } = useQuery("vehicles", fetchFirstTenVehicles, {});

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error:</div>;

  return <CardsView data={vehicles!} path="vehicles" />;
}
