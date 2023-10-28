import { useQuery } from "react-query";
import { fetchConnectedCharacters } from "../../api/api";
import { ConnectedEntity } from "./ConnectedEntity";
import { Character } from "../../models/character.model";

interface Props {
  urls: string[];
}

export const ConnectedEntityPeople = ({ urls }: Props) => {
  const { data: people, isLoading } = useQuery(["vehicles", urls], () => fetchConnectedCharacters(urls));
  const path = "people";

  return <ConnectedEntity data={people as Character[]} isLoading={isLoading} path={path} entityName="People" />;
};
