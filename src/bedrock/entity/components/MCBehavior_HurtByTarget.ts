import { Filter } from "../filters/Filter"

export interface MCBehavior_HurtByTargetEntityType {
	filters?: Filter[]
	max_dist?: number
	must_see?: boolean
	must_see_forget_duration?: number
	sprint_speed_multiplier?: number
	walk_speed_multiplier?: number
}

export interface MCBehavior_HurtByTarget {
	alert_same_type?: boolean
	entity_types?: MCBehavior_HurtByTargetEntityType[]
	hurt_owner?: boolean
	priority?: number
}
