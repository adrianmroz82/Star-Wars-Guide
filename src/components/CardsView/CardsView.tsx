import { Dispatch, SetStateAction } from "react";
import { Entity, Path } from "../../models/shared.model";
import { extractRouteId } from "../../utils/extractRouteId";
import { Card } from "../Card/Card";
import { Pagination } from "../Pagination/Pagination";

import classes from "./CardsView.module.scss";

interface PropsX {
  results: Entity[];
  next: string | null;
  previous: string | null;
  count: number;
}

interface Props {
  data: PropsX;
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
          <Card path={path} key={index} data={el} index={id[index]} />
        ))}
      </div>
    </>
  );
};
