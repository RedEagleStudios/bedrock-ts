import { EventTrigger } from "../events/EventTrigger"

export interface MCLeashable {
	canBeStolen?: boolean
	softDistance?: number
	hardDistance?: number
	maxDistance?: number
	onLeash?: EventTrigger
	onUnleash?: EventTrigger
}
