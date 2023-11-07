import { useState } from "react";
import { Entity } from "../../models/entity.model";
import { fetchCharactersByPage } from "../../api/character.api";

interface PropsX {
  results: Entity[];
  next: string | null;
  previous: string | null;
  count: number;
}

interface Props {
  results: PropsX;
  setResults: React.Dispatch<React.SetStateAction<PropsX>>;
  setIsLoading: boolean;
}

export function Pagination({ results, setResults, setIsLoading }: Props) {
  console.log(results);

  const [page, setPage] = useState(1);
  const [res, setRes] = useState(results.results);
  // const [totalPages, setTotalPages] = useState(1);
  const totalPages = Math.ceil(results.count / results.results.length);
  console.log(totalPages);

  const handlePageChange = async (page: number) => {
    setIsLoading(true);
    setPage(page);
    const x = await fetchCharactersByPage(page);
    setIsLoading(false);
    setRes(x.results);
    setResults(x);
  };

  console.log("xp", res);

  return (
    <div>
      <button onClick={() => handlePageChange(page - 1)} disabled={!results.previous}>
        Previous
      </button>
      <span>
        Page {page} of {totalPages}
      </span>
      <button onClick={() => handlePageChange(page + 1)} disabled={page === totalPages}>
        Next
      </button>
    </div>
  );
}
