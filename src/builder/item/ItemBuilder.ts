import { BPItem } from "../../bedrock/item/BPItem"
import { MCFood } from "../../bedrock/item/components"
import { CoreItem } from "../../bedrock/item/CoreItem"
import { RPItem } from "../../bedrock/item/RPItem"
import { Identifier } from "../../bedrock/keys/Identifier"

export class ItemBuilder implements CoreItem {
	constructor(public identifier: Identifier, private options: ItemBuilderOptions = {}) {}

	createBP(): BPItem {
		const options = this.options
		return {
			format_version: "1.16.0",
			MCItem: {
				description: {
					identifier: this.identifier,
					category: options.category,
				},
				components: {
					MCFoil: options.foil,
					MCFood: options.food,
					MCHandEquipped: options.handEquipped,
					MCMaxStackSize: options.maxStack,
					MCUseDuration: options.useDuration,
				},
			},
		}
	}

	createRP(): RPItem {
		const options = this.options
		return {
			format_version: "1.10.0",
			MCItem: {
				description: {
					identifier: this.identifier,
					category: options.category,
				},
				components: {
					MCIcon: options.icon ?? this.identifier.removeNamespace(),
				},
			},
		}
	}
}

export interface ItemBuilderOptions {
	category?: string
	foil?: boolean
	food?: MCFood
	handEquipped?: boolean
	icon?: string
	maxStack?: number
	useDuration?: number
}
