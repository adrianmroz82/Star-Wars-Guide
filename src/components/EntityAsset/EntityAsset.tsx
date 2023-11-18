import { Path } from "../../models/shared.model";

import classes from "./EntityAsset.module.scss";

interface Props {
  index?: number;
  path?: Path;
  border?: boolean;
}

export const EntityAsset = ({ index, path, border }: Props) => {
  return (
    <div
      data-testid="entity-asset"
      className={classes.entityAsset}
      style={{
        backgroundImage: `url(${`../../../${path}/${index}.jpg`})`,
        borderRadius: border ? "15px" : "0px",
      }}
    />
  );
};
