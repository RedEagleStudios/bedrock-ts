import { Identifier } from "../../bedrock/keys/Identifier"
import { BPItem } from "./BPItem"
import { RPItem } from "./RPItem"

export interface CoreItem {
	identifier: Identifier
	createBP(): BPItem
	createRP(): RPItem
}
