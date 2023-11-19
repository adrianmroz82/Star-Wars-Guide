import { useQuery } from "react-query";
import { ConnectedEntityView } from "./ConnectedEntityView";
import { Character } from "../../models/character.model";
import { Homeworld } from "../../models/homeworld.model";
import { Vehicle } from "../../models/vehicle.model";
import { Path } from "../../models/shared.model";

type Urls = string | string[];
interface Props<T> {
  urls: Urls;
  fetchFunction: (urls: string | string[]) => Promise<T>;
  path: Path;
  entityName: string;
}

export const ConnectedEntityQuery = <T extends Character[] | Homeworld | Vehicle[]>({
  urls,
  fetchFunction,
  path,
  entityName,
}: Props<T>) => {
  const { data, isLoading } = useQuery([entityName, urls], () => fetchFunction(urls));

  return <ConnectedEntityView data={data as T} isLoading={isLoading} path={path} entityName={entityName} />;
};
