import { MCEventFilter } from "."

export interface MCDamageSensorItem {
	cause?: string
	damage_multiplier?: number
	deals_damage?: boolean
	on_damage?: MCEventFilter
}

export interface MCDamageSensor {
	triggers: MCDamageSensorItem[]
}
