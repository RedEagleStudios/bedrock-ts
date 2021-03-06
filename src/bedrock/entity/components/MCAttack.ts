import { Range } from "../../../types/Range"

export interface MCAttack {
  damage: number | Range
  effect_duration?: number
  effect_name?: string
}
