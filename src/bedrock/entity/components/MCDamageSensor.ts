import { EventTriggerFiltered } from "../events/EventTriggerFiltered"

export interface MCDamageSensorTrigger {
	cause?: string
	damage_multiplier?: number
	deals_damage?: boolean
	on_damage?: EventTriggerFiltered
}

export interface MCDamageSensor {
	triggers: MCDamageSensorTrigger[]
}
