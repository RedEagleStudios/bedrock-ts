import { Filters } from "../filters"

export interface MCSpawnEntity {
	entities?: MCSpawnEntityEntity[]
}

export interface MCSpawnEntityEntity {
	filters?: Filters[]
	max_wait_time?: number
	min_wait_time?: number
	num_to_spawn?: number
	should_leash?: boolean
	single_use?: boolean
	spawn_entity?: string
	spawn_event?: string
	spawn_item?: string
	spawn_method?: string
	spawn_sound?: string
}
