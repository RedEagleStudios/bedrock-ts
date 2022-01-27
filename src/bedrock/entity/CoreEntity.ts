import { BPEntity } from "./BPEntity"
import { RPEntity } from "./RPEntity"

export interface CoreEntity {
	customFilePath?: string
	createBP?: () => BPEntity
	createRP?: () => RPEntity
}
