import { DamageCause } from "../../shared/DamageCause"
import { EventTriggerFiltered } from "../events/EventTriggerFiltered"

export interface MCDamageSensorTrigger {
  cause?: DamageCause
  damage_multiplier?: number
  deals_damage?: boolean
  on_damage?: EventTriggerFiltered
}

export interface MCDamageSensor {
  triggers?: MCDamageSensorTrigger[]
}
