import { BPEntity } from "./BPEntity"
import { RPEntity } from "./RPEntity"

export interface CoreEntity {
	fileName: string
	createBP(): BPEntity | void
	createRP(): RPEntity | void
}
