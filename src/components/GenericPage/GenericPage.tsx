import { useState } from "react";
import { useQuery } from "react-query";
import { CardsView } from "../CardsView/CardsView";
import { Path, ResponseResult } from "../../models/shared.model";
import { Spinner } from "../Spinner/Spinner";
import { ErrorPage } from "../../pages/ErrorPage";

interface Props<T> {
  queryKey: string;
  fetchFunction: (page: number) => Promise<T>;
  path: Path;
}

export function GenericPage<T extends ResponseResult>({ queryKey, fetchFunction, path }: Props<T>) {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useQuery([queryKey, page], () => fetchFunction(page), {});

  if (isLoading) return <Spinner />;
  if (error) return <ErrorPage />;

  return <CardsView page={page} setPage={setPage} data={data!} path={path} />;
}
