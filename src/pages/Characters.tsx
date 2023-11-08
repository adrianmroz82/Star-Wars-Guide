import { Character } from "../models/character.model";
import { GenericPage } from "../components/GenericPage/GenericPage";
import { fetchCharactersByPage } from "../api/character.api";

interface Props {
  results: Character[];
  next: string | null;
  previous: string | null;
  count: number;
}

export function Characters() {
  return <GenericPage<Props> queryKey="characters" fetchFunction={fetchCharactersByPage} path="people" />;
}
