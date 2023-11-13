import { useState, useEffect } from "react";
import { Entity } from "../../models/entity.model";
import { fetchCharactersByPage } from "../../api/character.api";
import { useQuery } from "react-query";

import classes from "./Pagination.module.scss";

interface ResultType {
  results: Entity[];
  next: string | null;
  previous: string | null;
  count: number;
}

interface Props {
  results: ResultType;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setResults: React.Dispatch<React.SetStateAction<ResultType>>;
}

export function Pagination({ results, setResults, setIsLoading }: Props) {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useQuery(["characters", page], () => fetchCharactersByPage(page), {});

  useEffect(() => {
    if (!isLoading) {
      setResults(data!);
    }
  }, [data, isLoading, setIsLoading, setResults]);

  const totalPages = Math.ceil(results.count / results.results.length);

  const handlePageChange = async (page: number) => {
    setPage(page);
  };

  return (
    <div className={classes.paginationContainer}>
      <button
        style={page === 0 ? { display: "none" } : { display: "block" }}
        className={classes.button}
        onClick={() => handlePageChange(page - 1)}
        disabled={!results.previous}>
        Prev
      </button>
      <span>
        Page {page} of {totalPages}
      </span>
      <button className={classes.button} onClick={() => handlePageChange(page + 1)} disabled={page === totalPages}>
        Next
      </button>
    </div>
  );
}
