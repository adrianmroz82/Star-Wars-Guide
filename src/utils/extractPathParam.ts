import { Path } from "../models/path.model";

export function extractPathParam(path: Path) {
  const pathArray = path.split("/");
  return pathArray[pathArray.length - 2];
}
