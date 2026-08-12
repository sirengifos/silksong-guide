import { getZone } from "../data/silksong";

export function zoneName(id: string): string {
  return getZone(id).name;
}

export function zoneColor(id: string): string {
  return getZone(id).color;
}
