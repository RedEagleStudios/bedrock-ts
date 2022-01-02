import { EventFilter } from "../events/EventFilter"

export interface MCDamageSensor {
	triggers?: MCDamageSensorTrigger[]
}

export interface MCDamageSensorTrigger {
	cause?: string
	damage_multiplier?: number
	deals_damage?: boolean
	on_damage?: EventFilter
	on_damage_sound_event?: string
}
