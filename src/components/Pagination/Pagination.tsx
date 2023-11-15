import { Dispatch } from "react";
import { Entity } from "../../models/entity.model";

import classes from "./Pagination.module.scss";

interface ResultType {
  results: Entity[];
  next: string | null;
  previous: string | null;
  count: number;
}

interface Props {
  data: ResultType;
  page: number;
  setPage: Dispatch<React.SetStateAction<number>>;
}

export function Pagination({ data, page, setPage }: Props) {
  const totalPages = Math.ceil(data.count / data.results.length);

  const handlePageChange = async (page: number) => {
    setPage(page);
  };

  return (
    <div className={classes.paginationContainer}>
      <button
        style={page === 0 ? { display: "none" } : { display: "block" }}
        className={classes.button}
        onClick={() => handlePageChange(page - 1)}
        disabled={!data.previous}>
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
