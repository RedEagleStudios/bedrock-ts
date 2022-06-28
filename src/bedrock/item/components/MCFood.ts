import { Vector3 } from "../../../types/Vector3"
import { SpellEffects } from "../../shared/SpellEffects"

export type MCFoodCooldownType = "none" | "chorusfruit"

export interface MCFoodEffect {
  name?: SpellEffects
  amplifier?: number
  chance?: number
  duration?: number
}

export type MCFoodOnUseAction = "none" | "chorus_teleport" | "suspicious_stew_effect"

export type MCFoodType = "good" | "low" | "max" | "normal" | "poor" | "supernatural"

export interface MCFood {
  can_always_eat?: boolean
  cooldown_time?: number
  cooldown_type?: MCFoodCooldownType
  effects?: MCFoodEffect[]
  nutrition?: number
  on_use_action?: MCFoodOnUseAction
  on_use_range?: Vector3
  saturation_modifier?: MCFoodType
  using_converts_to?: string
}
