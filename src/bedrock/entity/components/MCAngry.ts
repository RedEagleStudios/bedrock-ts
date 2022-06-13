import { Range } from "../../../types/Range"
import { EventTrigger } from "../events/EventTrigger"
import { Filters } from "../filters/Filter"

export interface MCAngry {
	angry_sound?: string
	broadcast_anger?: boolean
	broadcast_anger_on_attack?: boolean
	broadcast_anger_on_being_attacked?: boolean
	broadcast_filters?: Filters
	broadcast_range?: number
	broadcast_targets?: string[]
	calm_event?: string | EventTrigger
	duration?: number
	duration_delta?: number
	filters?: Filters
	sound_interval?: Range
}
