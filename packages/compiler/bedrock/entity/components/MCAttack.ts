import { Vector2 } from "../../../types/Vector"

export interface MCAttack {
	damage?: number | Vector2
	effect_name?: string
	effect_duration?: number
}
