import { Entity } from "../models/entity.model";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function extractRouteId(data: Entity | Entity[]) {
  if (Array.isArray(data)) {
    const ids = data.map((item) => {
      const parts = item.url.split("/");
      return parts[parts.length - 2];
    });

    return ids;
  }

  const parts = data.url.split("/");
  const dataIndex = parts[parts.length - 2];
  return dataIndex;
}
