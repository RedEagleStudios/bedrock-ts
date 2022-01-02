import { Vector2 } from "../../../types/Vector"

export interface MCExplode {
	breaks_blocks?: boolean
	causes_fire?: boolean
	destroy_affected_by_griefing?: boolean
	fire_affected_by_griefing?: boolean
	fuse_length?: number | Vector2
	fuse_lit?: boolean
	max_resistance?: number
	power?: number
}
