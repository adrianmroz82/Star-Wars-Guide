import { Character } from "../models/character.model";
import { GenericPage } from "../components/GenericPage/GenericPage";
import { fetchCharacters } from "../api/character.api";

export function Characters() {
  return <GenericPage<Character[]> queryKey="characters" fetchFunction={fetchCharacters} path="people" />;
}
