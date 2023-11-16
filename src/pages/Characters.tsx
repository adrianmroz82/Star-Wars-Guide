import { GenericPage } from "../components/GenericPage/GenericPage";
import { fetchCharactersByPage } from "../api/character.api";
import { ResponseResult } from "../models/shared.model";

export function Characters() {
  return <GenericPage<ResponseResult> queryKey="characters" fetchFunction={fetchCharactersByPage} path="people" />;
}
