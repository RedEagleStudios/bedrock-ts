import { Identifier } from "../identifier/Identifier"
import { BPEntity } from "./BPEntity"
import { RPEntity } from "./RPEntity"

export interface SimpleEntity {
	identifier: Identifier
	createBP(): BPEntity
	createRP(): RPEntity
}
