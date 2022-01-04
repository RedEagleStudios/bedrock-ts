import { Range } from "../../../types"

export interface MCAttack {
	damage: number | Range
	effect_duration?: number
	effect_name?: string
}
