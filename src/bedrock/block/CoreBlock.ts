import { BPBlock } from "./BPBlock"
import { RPBlock } from "./RPBlock"

export interface CoreBlock {
	customFilePath?: string
	createBP(): BPBlock
	createRP(): RPBlock
}
