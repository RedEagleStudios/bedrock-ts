import { Vector2 } from "../../../types/Vector"

export interface MCBehavior_LookAtPlayer {
	priority?: number
	angle_of_view_horizontal?: number
	angle_of_view_vertical?: number
	look_distance?: number
	look_time?: Vector2
	probability?: number
}
