import { EntityInfo } from "../EntityInfo/EntityInfo";
import { Entity, Path } from "../../models/shared.model";

import classes from "./EntityDetails.module.scss";

interface Props {
  id: string;
  entity: Entity;
  entityContent: JSX.Element | false;
  path: Path;
}

const EntityDetails = ({ id, entity, entityContent, path }: Props) => {
  return (
    <div className={classes.container} data-testid="entity-details">
      <div className={classes.content}>
        <EntityInfo entity={entity!} index={Number(id)} path={path as Path} />
        <div className={classes.entityInfo}>{entityContent}</div>
      </div>
    </div>
  );
};

export default EntityDetails;
