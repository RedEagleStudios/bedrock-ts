import { EventFilter } from "../events/EventFilter"
import { Filters } from "../filters"

export interface MCInteract {
	interactions?: MCInteractInteractions[]
}

export interface MCInteractInteractions {
	add_items?: string
	cooldown?: number
	hurt_item?: number
	interact_text?: string
	particle_on_start?: string
	play_sounds?: string
	spawn_entities?: string
	spawn_items?: string
	swing?: boolean
	transform_to_item?: string
	use_item?: boolean
	filters?: Filters
	on_interact?: EventFilter
	table?: string
	particle_offset_towards_interactor?: boolean
	particle_type?: string
	particle_y_offset?: number
}
