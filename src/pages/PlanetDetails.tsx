import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchConnectedCharacters, fetchHomeworld } from "../api/api";
import { Spinner } from "../components/Spinner/Spinner";
import { ErrorPage } from "./ErrorPage";
import { EntityInfo } from "../components/EntityInfo/EntityInfo";
import { ConnectedEntityQuery } from "../components/ConnectedEntity/ConnectedEntityQuery";
import { Character } from "../models/character.model";

export function HomeworldDetails() {
  const { id } = useParams();
  const { data: homeworld, isLoading, error } = useQuery(["homeworld", id], () => fetchHomeworld(id!), {});

  if (isLoading) return <Spinner />;
  if (error) return <ErrorPage />;

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "1000px" }}>
        <EntityInfo entity={homeworld!} index={Number(id)} path="planets" />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
            gap: "20px",
          }}>
          {homeworld!.residents!.length > 0 && (
            <ConnectedEntityQuery<Character[]>
              urls={homeworld!.residents}
              fetchFunction={fetchConnectedCharacters as () => Promise<Character[]>}
              path="people"
              entityName="Characters"
            />
          )}
        </div>
      </div>
    </div>
  );
}
