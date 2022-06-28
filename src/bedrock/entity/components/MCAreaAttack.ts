import { DamageCause } from "../../shared/DamageCause"
import { Filters } from "../filters/Filter"

export interface MCAreaAttack {
  cause?: DamageCause
  damage_per_tick?: number
  damage_range?: number
  entity_filter?: Filters
}
