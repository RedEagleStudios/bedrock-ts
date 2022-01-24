import { Identifier } from "../../bedrock/shared/Identifier"
import { BPItem } from "./BPItem"
import { RPItem } from "./RPItem"

export interface CoreItem {
	identifier: Identifier
	createBP(): BPItem
	createRP(): RPItem
}
