import { Vector2 } from "../../../types/Vector"
import { EventTrigger } from "../events/EventTrigger"

export interface MCTimer {
	looping?: boolean
	randomInterval?: boolean
	randomTimeChoices?: MCTimerRandomTimeChoice[]
	time?: number | Vector2
	timeDownEvent?: EventTrigger
}

export interface MCTimerRandomTimeChoice {
	value?: number
	weight?: number
}
