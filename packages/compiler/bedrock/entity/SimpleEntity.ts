import { BPEntity } from "./bp/BPEntity"
import { Identifier } from "./Identifier"
import { RPEntity } from "./rp/RPEntity"

export interface SimpleEntity {
	identifier: Identifier
	createBP(): BPEntity
	createRP(): RPEntity
}
