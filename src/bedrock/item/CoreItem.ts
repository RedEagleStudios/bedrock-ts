import { BPItem } from "./BPItem"
import { RPItem } from "./RPItem"

export interface CoreItem {
	customFilePath?: string
	createBP?: () => BPItem
	createRP?: () => RPItem
}
