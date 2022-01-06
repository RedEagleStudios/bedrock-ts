import { Vector3 } from "../../../types/Vector3"

export type MCFoodCooldownType = "none" | "chorusfruit"

export type MCFoodOnUseAction = "none" | "chorus_teleport" | "suspicious_stew_effect"

export type MCFoodType = "good" | "low" | "max" | "normal" | "poor" | "supernatural"

export interface MCFood {
	can_always_eat?: boolean
	cooldown_time?: number
	cooldown_type?: MCFoodCooldownType
	effects?: string[]
	nutrition?: number
	on_use_action?: MCFoodOnUseAction
	on_use_range?: Vector3
	saturation_modifier?: MCFoodType
	using_converts_to?: string
}
