import { useLocation, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { ConnectedEntityQuery } from "../components/ConnectedEntity/ConnectedEntityQuery";
import { Character } from "../models/character.model";
import EntityDetails from "../components/EntityDetails/EntityDetails";
import { fetchConnectedCharacters, fetchHomeworld } from "../api/api";
import { Path } from "../models/path.model";
import { extractPathParam } from "../utils/extractPathParam";
import { Spinner } from "../components/Spinner/Spinner";
import { ErrorPage } from "./ErrorPage";

export function HomeworldDetails() {
  const { id } = useParams();
  const location = useLocation();

  const { data: homeworld, isLoading, error } = useQuery(["homeworld", id], () => fetchHomeworld(id!), {});

  if (isLoading) return <Spinner />;
  if (error) return <ErrorPage />;

  const path = extractPathParam(location.pathname as Path);

  const entityContent = homeworld!.residents!.length > 0 && (
    <ConnectedEntityQuery<Character[]>
      urls={homeworld!.residents}
      fetchFunction={fetchConnectedCharacters as () => Promise<Character[]>}
      path={path as Path}
      entityName="Characters"
    />
  );

  return <EntityDetails path={path as Path} id={id!} entity={homeworld!} entityContent={entityContent} />;
}
