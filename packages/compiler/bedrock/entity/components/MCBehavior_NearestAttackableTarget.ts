import { Filters } from "../filters"

export interface MCBehavior_NearestAttackableTarget {
	attack_interval?: number
	attack_interval_min?: number
	attack_owner?: boolean
	entity_types?: string[]
	must_reach?: boolean
	must_see?: boolean
	must_see_forget_duration?: number
	persist_time?: number
	priority?: number
	reselect_targets?: boolean
	scan_interval?: number
	set_persistent?: boolean
	target_invisible_multiplier?: number
	target_search_height?: number
	target_sneak_visibility_multiplier?: number
	within_radius?: number
	filters?: Filters[]
	max_dist?: number
}
