import { DamageCause } from "../../shared/DamageCause"
import { Filters } from "../filters/Filter"

export interface MCHurtOnConditionDamageConditions {
  cause?: DamageCause
  damage_per_tick?: number
  filters?: Filters
}

export interface MCHurtOnCondition {
  damage_conditions?: MCHurtOnConditionDamageConditions[]
}
