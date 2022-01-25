import { Range } from "../../../types/Range"

export interface MCTimerRandomTimeChoice {
	value?: number
	weight?: number
}

export interface MCTimerTimeDownEvent {
	event?: string
	target?: string
}

export interface MCTimer {
	looping?: boolean
	random_time_choices?: MCTimerRandomTimeChoice[]
	randomInterval?: boolean
	time?: number | Range
	time_down_event?: MCTimerTimeDownEvent
}
