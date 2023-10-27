// Usage for ConnectedHomeland component with Homeworld type
import { useQuery } from "react-query";
import { fetchConnectedHomeworld } from "../../api/api";
import { Homeworld } from "../../models/homeworld.model";
import { ConnectedEntity } from "./ConnectedEntity";

interface Props {
  url: string;
}

export const ConnectedEntityHomeland = ({ url }: Props) => {
  const { data: homeworld, isLoading } = useQuery(["homeworld", url], () => fetchConnectedHomeworld(url));
  const path = "planets";

  console.log(homeworld);

  return (
    <ConnectedEntity
      data={homeworld as Homeworld}
      isLoading={isLoading}
      path={path}
      entityName="Homeworld"
      // generateLink=
    />
  );
};
