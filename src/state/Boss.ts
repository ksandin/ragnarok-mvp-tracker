import { Map } from "./Map";
import { Minutes } from "./Minutes";
import { MapLocation } from "./MapLocation";

export type Boss = {
  id: number;
  icon?: string;
  name: string;
  map: Map;
  spawnCooldown: Minutes;
  spawnWindow: Minutes;
  tombstone: boolean;
  spawnLocation: MapLocation | undefined;
};