export interface MCInteractItemAddItems {
	table?: string
}

export interface MCInteractItemParticleOnStart {
	particle_offset_towards_interactor?: boolean
	particle_type?: string
	particle_y_offset?: number
}

export interface MCInteractItemSpawnItems {
	table?: string
}

export interface MCInteractItem {
	add_items?: MCInteractItemAddItems
	cooldown?: number
	filters?: MCFilter
	hurt_item?: number
	interact_text?: string
	on_interact?: MCEventFilter
	particle_on_start?: MCInteractItemParticleOnStart
	play_sounds?: string
	spawn_entities?: string
	spawn_items?: MCInteractItemSpawnItems
	swing?: boolean
	transform_to_item?: string
	use_item?: boolean
}

export interface MCInteract {
	interactions: MCInteractItem[]
}
