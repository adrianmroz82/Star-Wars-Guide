import { Character } from "./character.model";
import { Homeworld } from "./homeworld.model";
import { Vehicle } from "./vehicle.model";

export type Entity = Character | Vehicle | Homeworld;
