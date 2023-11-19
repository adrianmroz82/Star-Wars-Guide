import { Dispatch } from "react";

import classes from "./Pagination.module.scss";
import { ResponseResult } from "../../models/shared.model";

interface Props {
  data: ResponseResult;
  page: number;
  setPage: Dispatch<React.SetStateAction<number>>;
}

export function Pagination({ data, page, setPage }: Props) {
  const ITEMS_PER_PAGE = 10;
  const totalPages = Math.ceil(data.count / ITEMS_PER_PAGE);

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
