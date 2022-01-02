import { EventTrigger } from "../events/EventTrigger"

export interface MCTameable {
	probability?: number
	tameEvent?: EventTrigger
	tameItems?: string[]
}
