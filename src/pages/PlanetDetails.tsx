import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchHomeworld } from "../api/api";
import { Spinner } from "../components/Spinner/Spinner";
import { ErrorPage } from "./ErrorPage";
import { EntityInfo } from "../components/EntityInfo/EntityInfo";
import { ConnectedEntityPeople } from "../components/ConnectedEntity/ConnectedEntityPeople";

export function HomeworldDetails() {
  const { id } = useParams();
  const { data: homeworld, isLoading, error } = useQuery(["homeworld", id], () => fetchHomeworld(id!), {});

  if (isLoading) return <Spinner />;
  if (error) return <ErrorPage />;

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "1000px" }}>
        <EntityInfo entity={homeworld!} index={Number(id)} path="planets" />
        {homeworld?.name}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
            gap: "20px",
          }}>
          {homeworld!.residents!.length > 0 && <ConnectedEntityPeople urls={homeworld!.residents!} />}
        </div>
      </div>
    </div>
  );
}
