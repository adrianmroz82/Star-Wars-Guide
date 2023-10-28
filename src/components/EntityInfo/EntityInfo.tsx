import { Character } from "../../models/character.model";
import { Homeworld } from "../../models/homeworld.model";
import { Path } from "../../models/path.model";
import { Vehicle } from "../../models/vehicle.model";
import { EntityAsset } from "../CharacterAsset/CharacterAsset";

import classes from "./EntityInfo.module.scss";

type Entity = Character | Vehicle | Homeworld;

interface Props {
  entity: Entity;
  index?: number;
  path: Path;
}

type EntityByPath = {
  people: Character;
  vehicles: Vehicle;
  planets: Homeworld;
};

export const EntityInfo = ({ entity, index, path }: Props) => {
  return (
    <div className={classes.characterInfoWrapper}>
      <EntityAsset index={index} path={path} />
      <div className={classes.characterInfoDetails}>
        <h2 className={classes.characterName}>{entity.name}</h2>
        <div className={classes.characterDescription}>
          {path === "people" && (
            <>
              <p>Birth Year: {(entity as EntityByPath["people"]).birth_year}</p>
              <p>Eye color: {(entity as EntityByPath["people"]).eye_color}</p>
              <p>Gender: {(entity as EntityByPath["people"]).gender}</p>
              <p>Skin color: {(entity as EntityByPath["people"]).skin_color}</p>
            </>
          )}
          {path === "vehicles" && (
            <>
              <p>Vehicle Property 1: {(entity as EntityByPath["vehicles"]).name}</p>
              <p>Vehicle Property 2: {(entity as EntityByPath["vehicles"]).model}</p>
            </>
          )}
          {path === "planets" && (
            <>
              <p>Name: {(entity as EntityByPath["planets"]).name}</p>
              <p>Population: {(entity as EntityByPath["planets"]).population}</p>
              <p>Terrain: {(entity as EntityByPath["planets"]).terrain}</p>
              <p>Climate: {(entity as EntityByPath["planets"]).climate}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
