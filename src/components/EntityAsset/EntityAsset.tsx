import { Path } from "../../models/shared.model";

import classes from "./EntityAsset.module.scss";

interface Props {
  index?: number;
  path?: Path;
}

export const EntityAsset = ({ index, path }: Props) => {
  return (
    <div
      data-testid="entity-asset"
      className={classes.entityAsset}
      style={{
        backgroundImage: `url(${`../../../${path}/${index}.jpg`})`,
      }}
    />
  );
};
