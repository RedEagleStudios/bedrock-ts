import { EventTrigger } from "../events/EventTrigger"

export interface MCTameable {
	probability?: number
	tame_event?: EventTrigger
	tame_items?: string[]
}
