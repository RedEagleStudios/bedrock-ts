import { RPItem, RPItemCategory, RPItemComponents } from "../../bedrock/item/RPItem"
import { Identifier } from "../../bedrock/shared/Identifier"
import { assign } from "../../utils/assign"
import { Builder } from "../Builder"

export class RPItemBuilder extends Builder<RPItem> {
	constructor(identifier: Identifier) {
		super({
			format_version: "1.10.0",
			MCItem: {
				description: {
					identifier: identifier,
				},
				components: {
					MCIcon: identifier.removeNamespace(),
				},
			},
		})
	}

	public setCategory(category: RPItemCategory) {
		this.object.MCItem.description.category = category
	}

	public setComponents(components: RPItemComponents) {
		assign(this.object.MCItem.components, components)
	}
}
