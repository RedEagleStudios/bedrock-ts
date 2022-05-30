import { EventTrigger } from "../events/EventTrigger"
import { Filters } from "../filters/Filter"

export interface MCBehavior_AvoidMobTypeEntityType {
	filters?: Filters
	max_dist?: number
	must_see?: boolean
	must_see_forget_duration?: number
	sprint_speed_multiplier?: number
	walk_speed_multiplier?: number
}

export interface MCBehavior_AvoidMobType {
	avoid_mob_sound?: string
	entity_types?: MCBehavior_AvoidMobTypeEntityType[]
	ignore_visibility?: boolean
	max_dist?: number
	max_flee?: number
	on_escape_event?: EventTrigger
	priority?: number
	probability_per_strength?: number
	remove_target?: boolean
	sound_interval?: number
	sprint_speed_multiplier?: number
	walk_speed_multiplier?: number
}
