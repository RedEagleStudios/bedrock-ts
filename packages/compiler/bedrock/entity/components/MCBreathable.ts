export interface MCBreathable {
	breathable_block_list?: string[]
	breath_air?: boolean
	breath_lava?: boolean
	breath_solid?: boolean
	breath_water?: boolean
	generates_bubbles?: boolean
	inhale_time?: number
	not_breathable_block_list?: string[]
	suffocate_time?: number
	total_supply?: number
}
