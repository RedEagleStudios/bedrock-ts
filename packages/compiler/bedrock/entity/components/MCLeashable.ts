import { EventTrigger } from "../events/EventTrigger"

export interface MCLeashable {
	can_be_stolen?: boolean
	soft_distance?: number
	hard_distance?: number
	max_distance?: number
	on_leash?: EventTrigger
	on_unleash?: EventTrigger
}
