export interface MCTimer {
	looping?: boolean
	randomInterval?: boolean
	random_time_choices?: MCTimerRandomTimeChoice[]
	time?: number[]
	time_down_event?: MCTimerTimeDownEvent
}