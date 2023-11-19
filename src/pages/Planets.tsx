import { fetchHomeworldsByPage } from "../api/homeworld.api";
import { GenericPage } from "../components/GenericPage/GenericPage";
import { ResponseResult } from "../models/shared.model";

export function Planets() {
  return <GenericPage<ResponseResult> queryKey="planets" fetchFunction={fetchHomeworldsByPage} path="planets" />;
}
