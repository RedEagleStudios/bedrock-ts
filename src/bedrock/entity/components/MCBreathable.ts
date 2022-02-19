import { ItemIdentifier } from "../../shared/ItemIdentifier"

export interface MCBreathable {
	breathe_block?: ItemIdentifier[]
	breathes_air?: boolean
	breathes_lava?: boolean
	breathes_solid?: boolean
	breathes_water?: boolean
	generates_bubbles?: boolean
	inhale_time?: number
	non_breathe_blocks?: ItemIdentifier[]
	suffocate_time?: number
	total_supply?: number
}
