import { EventTrigger } from "../events/EventTrigger"

export interface MCBehavior_MeleeAttack {
	attack_once?: boolean
	attack_types?: string
	cooldown_time?: number
	melee_fov?: number
	on_attack?: EventTrigger
	priority?: number
	random_stop_interval?: number
	reach_multiplier?: number
	require_complete_path?: boolean
	speed_multiplier?: number
	track_target?: boolean
	event?: string
	target?: string
}
