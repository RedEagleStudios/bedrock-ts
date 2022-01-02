import { Filters } from "../filters"

export interface MCBehavior_HurtByTarget {
	alert_same_type?: boolean
	entity_types?: string[]
	hurt_owner?: boolean
	priority?: number
	filters?: Filters[]
	max_dist?: number
	must_see?: boolean
	must_see_forget_duration?: number
	sprint_speed_multiplier?: number
	walk_speed_multiplier?: number
}
