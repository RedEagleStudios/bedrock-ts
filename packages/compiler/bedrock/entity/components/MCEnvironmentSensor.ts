import { EventTriggerFiltered } from "../events/EventTriggerFiltered"

export interface MCEnvironmentSensor {
	triggers?: EventTriggerFiltered | EventTriggerFiltered[]
}
