import { useQuery } from "react-query";
import { Character } from "../models/character.model";
import { fetchFirstTenCharacters } from "../api/api";
import { CardsView } from "../components/CardsView/CardsView";

export function Characters() {
  const { data, isLoading, error } = useQuery("characters", fetchFirstTenCharacters, {
    staleTime: 60000 * 5,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error:</div>;

  const characters = data?.data.results as Character[];

  return <CardsView data={characters} path="people" />;
}
