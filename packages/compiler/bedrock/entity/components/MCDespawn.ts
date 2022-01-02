import { Filters } from "../filters"
import { Dummy } from "./Dummy"

export interface MCDespawn {
	despawn_from_chance?: boolean
	despawn_from_distance?: Dummy
	despawn_from_inactivity?: boolean
	despawn_from_simulation_edge?: boolean
	filters?: Filters[]
	min_range_inactivity_timer?: number
	min_range_random_chance?: number
	remove_child_entities?: boolean
	max_distance?: number
	min_distance?: number
}
