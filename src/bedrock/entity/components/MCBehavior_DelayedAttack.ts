import { EventTriggerFiltered } from "../events/EventTriggerFiltered"

export interface MCBehavior_DelayedAttack {
  attack_duration?: number
  attack_once?: boolean
  attack_types?: string
  cooldown_time?: number
  hit_delay_pct?: number
  inner_boundary_time_increase?: number
  max_dist?: number
  max_path_time?: number
  melee_fov?: number
  min_path_time?: number
  on_attack?: EventTriggerFiltered
  outer_boundary_time_increase?: number
  path_fail_time_increase?: number
  path_inner_boundary?: number
  path_outer_boundary?: number
  priority?: number
  random_stop_interval?: number
  reach_multiplier?: number
  require_complete_path?: boolean
  set_persistent?: boolean
  speed_multiplier?: number
  target_dist?: number
  track_target?: boolean
  x_max_rotation?: number
  y_max_head_rotation?: number
}
