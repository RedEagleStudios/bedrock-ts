import { EventFilter } from "../events/EventFilter"

export interface MCDamageSensor {
	triggers?: MCDamageSensorTrigger[]
}

export interface MCDamageSensorTrigger {
	cause?: string
	damageMultiplier?: number
	dealsDamage?: boolean
	onDamage?: EventFilter
	onDamageSoundEvent?: string
}
