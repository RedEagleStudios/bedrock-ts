import { BPItem } from "../../bedrock/item/BPItem"
import { BPItemComponents } from "../../bedrock/item/components"
import { Identifier } from "../../bedrock/shared/Identifier"
import { assign } from "../../utils/assign"
import { Builder } from "../Builder"

export class BPItemBuilder extends Builder<BPItem> {
	constructor(identifier: Identifier) {
		super({
			format_version: "1.16.0",
			MCItem: {
				description: {
					identifier: identifier,
				},
				components: {},
			},
		})
	}

	public setCategory(category: string) {
		this.object.MCItem.description.category = category
	}

	public setComponents(components: BPItemComponents) {
		assign(this.object.MCItem.components, components)
	}
}
