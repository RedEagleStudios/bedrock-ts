import { Vector2 } from "../../../types/Vector"

export interface MCBehavior_LookAtPlayer {
	priority?: number
	angleOfViewHorizontal?: number
	angleOfViewVertical?: number
	lookDistance?: number
	lookTime?: Vector2
	probability?: number
}
