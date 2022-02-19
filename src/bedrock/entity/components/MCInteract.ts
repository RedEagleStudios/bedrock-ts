import { ItemIdentifier } from "../../shared/ItemIdentifier"
import { EventTriggerFiltered } from "../events/EventTriggerFiltered"
import { Filters } from "../filters/Filter"

export interface MCInteractInteractionAddItems {
	table?: string
}

export interface MCInteractInteractionParticleOnStart {
	particle_offset_towards_interactor?: boolean
	particle_type?: string
	particle_y_offset?: number
}

export interface MCInteractInteractionSpawnItems {
	table?: string
}

export interface MCInteractInteraction {
	add_items?: MCInteractInteractionAddItems
	cooldown?: number
	filters?: Filters
	hurt_item?: number
	interact_text?: string
	on_interact?: EventTriggerFiltered
	particle_on_start?: MCInteractInteractionParticleOnStart
	play_sounds?: string
	spawn_entities?: string
	spawn_items?: MCInteractInteractionSpawnItems
	swing?: boolean
	transform_to_item?: ItemIdentifier
	use_item?: boolean
}

export interface MCInteract {
	interactions: MCInteractInteraction[]
}
