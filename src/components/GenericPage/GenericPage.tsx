import { useQuery } from "react-query";
import { CardsView } from "../CardsView/CardsView";
import { Path } from "../../models/path.model";
import { Spinner } from "../Spinner/Spinner";
import { ErrorPage } from "../../pages/ErrorPage";
import { Entity } from "../../models/entity.model";

interface Props<T> {
  queryKey: string;
  fetchFunction: () => Promise<T>;
  path: Path;
}

export function GenericPage<T extends Entity[]>({ queryKey, fetchFunction, path }: Props<T>) {
  const { data, isLoading, error } = useQuery(queryKey, fetchFunction, {});

  if (isLoading) return <Spinner />;
  if (error) return <ErrorPage />;

  return <CardsView data={data!} path={path} />;
}
