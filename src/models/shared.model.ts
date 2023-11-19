import { Character } from "./character.model";
import { Homeworld } from "./homeworld.model";
import { Vehicle } from "./vehicle.model";

export type Path = "vehicles" | "people" | "planets";
export type Entity = Character | Vehicle | Homeworld;

export interface ResponseResult {
  results: Entity[];
  next: string | null;
  previous: string | null;
  count: number;
}
