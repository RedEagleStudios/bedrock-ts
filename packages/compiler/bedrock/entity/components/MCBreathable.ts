export interface MCBreathable {
	breathes_air?: boolean
	breathes_lava?: boolean
	breathes_solid?: boolean
	breathes_water?: boolean
	breathe_block?: string[]
	generates_bubbles?: boolean
	inhale_time?: number
	non_breathe_blocks?: string[]
	suffocate_time?: number
	total_supply?: number
}
