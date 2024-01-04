import { Dispatch, SetStateAction } from "react";
import { Path, ResponseResult } from "../../models/shared.model";
import { extractRouteId } from "../../utils/extractRouteId";
import { Card } from "../Card/Card";
import { Pagination } from "../Pagination/Pagination";

import classes from "./CardsView.module.scss";

interface Props {
  data: ResponseResult;
  path: Path;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

export const CardsView = ({ data, path, page, setPage }: Props) => {
  const id = extractRouteId(data.results);

  return (
    <>
      <Pagination data={data} page={page} setPage={setPage} />
      <div className={classes.cardsView} data-testid="cardsView">
        {data.results.map((el, index) => (
          <Card path={path} key={index} data={el} index={id[index] as unknown as number} />
        ))}
      </div>
    </>
  );
};
