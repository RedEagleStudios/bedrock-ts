import { EventTrigger } from "../events/EventTrigger"
import { Filters } from "../filters/Filter"

export interface MCBehavior_KnockbackRoar {
  attack_time?: number
  cooldown_time?: number
  damage_filters?: Filters
  duration?: number
  knockback_damage?: number
  knockback_filters?: Filters
  knockback_horizontal_strength?: number
  knockback_range?: number
  knockback_strength?: number
  knockback_vertical_strength?: number
  on_roar_end?: EventTrigger
  priority?: number
  track_target?: boolean
}
