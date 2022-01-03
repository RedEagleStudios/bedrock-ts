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
	randomInterval?: boolean
	random_time_choices?: MCTimerRandomTimeChoice[]
	time?: number | Range
	time_down_event?: MCTimerTimeDownEvent
}
