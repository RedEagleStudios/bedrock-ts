import { EventFilter } from "../events/EventFilter"
import { Filters } from "../filters"

export interface MCInteract {
	interactions?: MCInteractInteractions[]
}

export interface MCInteractInteractions {
	addItems?: string
	cooldown?: number
	hurtItem?: number
	interactText?: string
	particleOnStart?: string
	playSounds?: string
	spawnEntities?: string
	spawnItems?: string
	swing?: boolean
	transformToItem?: string
	useItem?: boolean
	filters?: Filters
	onInteract?: EventFilter
	table?: string
	particleOffsetTowardsInteractor?: boolean
	particleType?: string
	particleYOffset?: number
}
