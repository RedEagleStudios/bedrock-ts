import { BPBlockBuilder } from "../../builder/block/BPBlockBuilder"
import { RPBlockBuilder } from "../../builder/block/RPBlockBuilder"
import { Identifier } from "../shared/Identifier"
import { BPBlock } from "./BPBlock"
import { RPBlock } from "./RPBlock"

export interface CoreBlock {
	/**
	 * Custom block directory, this will also affects the auto-generated terrain_textures path
	 */
	dir?: string
	/**
	 * Override block name in en_US.lang
	 */
	name?: string
	identifier: Identifier
	createBP(builder: BPBlockBuilder): BPBlock
	createRP(builder: RPBlockBuilder): RPBlock
}
