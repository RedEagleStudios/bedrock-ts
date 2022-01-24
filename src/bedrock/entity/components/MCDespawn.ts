import { Filters } from "../filters/Filter"

export interface MCDespawnDespawnFromDistance {
	max_distance?: number
	min_distance?: number
}

export interface MCDespawn {
	despawn_from_chance?: boolean
	despawn_from_distance?: MCDespawnDespawnFromDistance
	despawn_from_inactivity?: boolean
	despawn_from_simulation_edge?: boolean
	filters?: Filters
	min_range_inactivity_timer?: number
	min_range_random_chance?: number
	remove_child_entities?: boolean
}
