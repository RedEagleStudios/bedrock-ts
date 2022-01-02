import { Vector2 } from "../../../types/Vector"

export interface MCAttack {
	damage?: number | Vector2
	effectName?: string
	effectDuration?: number
}
