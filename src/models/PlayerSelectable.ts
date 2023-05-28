import type { Player } from "./Player";

export  interface PlayerSelectable extends Player {
  selected?: boolean;
}
