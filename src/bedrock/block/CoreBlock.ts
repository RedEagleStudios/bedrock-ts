import { BPBlockBuilder } from "../../builder/block/BPBlockBuilder"
import { RPBlockBuilder } from "../../builder/block/RPBlockBuilder"
import { Identifier } from "../shared/Identifier"
import { BPBlock } from "./BPBlock"
import { RPBlock } from "./RPBlock"

export interface CoreBlock {
	dir?: string
	identifier: Identifier
	createBP(builder: BPBlockBuilder): BPBlock
	createRP(builder: RPBlockBuilder): RPBlock
}
