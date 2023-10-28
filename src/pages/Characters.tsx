import { Character } from "../models/character.model";
import { fetchFirstTenCharacters } from "../api/api";
import { GenericPage } from "../components/GenericPage/GenericPage";

export function Characters() {
  return <GenericPage<Character[]> queryKey="characters" fetchFunction={fetchFirstTenCharacters} path="people" />;
}
