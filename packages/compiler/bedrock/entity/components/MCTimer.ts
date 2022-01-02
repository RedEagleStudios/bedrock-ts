import { Vector2 } from "../../../types/Vector"
import { EventTrigger } from "../events/EventTrigger"

export interface MCTimer {
	looping?: boolean
	random_interval?: boolean
	random_time_choices?: MCTimerRandomTimeChoice[]
	time?: number | Vector2
	time_down_event?: EventTrigger
}

export interface MCTimerRandomTimeChoice {
	value?: number
	weight?: number
}
