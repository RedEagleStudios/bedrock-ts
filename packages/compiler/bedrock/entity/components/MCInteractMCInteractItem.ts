export interface MCInteractMCInteractItem {
	add_items?: MCInteractMCInteractItemAddItems
	cooldown?: number
	filters?: MCFilter
	hurt_item?: number
	interact_text?: string
	on_interact?: MCEventFilter
	particle_on_start?: MCInteractMCInteractItemParticleOnStart
	play_sounds?: string
	spawn_entities?: string
	spawn_items?: MCInteractMCInteractItemSpawnItems
	swing?: boolean
	transform_to_item?: string
	use_item?: boolean
}
