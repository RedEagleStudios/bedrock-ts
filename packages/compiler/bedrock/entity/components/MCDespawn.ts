export interface MCDespawn {
	despawn_from_chance?: boolean
	despawn_from_distance?: MCDespawnDespawnFromDistance
	despawn_from_inactivity?: boolean
	despawn_from_simulation_edge?: boolean
	filters?: MCFilter
	min_range_inactivity_timer?: number
	min_range_random_chance?: number
	remove_child_entities?: boolean
}
