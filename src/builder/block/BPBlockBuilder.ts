import { BPBlock, BPBlockComponents } from "../../bedrock/block/BPBlock"
import { Identifier } from "../../bedrock/shared/Identifier"
import { assign } from "../../utils/assign"
import { Builder } from "../Builder"

export class BPBlockBuilder extends Builder<BPBlock> {
	constructor(identifier: Identifier, dir?: string) {
		super({
			format_version: "1.12.0",
			MCBlock: {
				description: {
					identifier: identifier,
					register_to_creative_menu: true,
				},
				components: {
					MCLoot: `loot_tables/blocks/${identifier.toFilePath(dir)}.json`,
				},
			},
		})
	}

	public setComponents(components: BPBlockComponents) {
		assign(this.object.MCBlock.components, components)
	}
}
