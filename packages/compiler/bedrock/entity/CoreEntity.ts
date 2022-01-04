import { Identifier } from "../identifier/Identifier"
import { BPEntity } from "./BPEntity"
import { RPEntity } from "./RPEntity"

export interface CoreEntity {
	identifier: Identifier
	createBP(): BPEntity | void
	createRP(): RPEntity | void
}
