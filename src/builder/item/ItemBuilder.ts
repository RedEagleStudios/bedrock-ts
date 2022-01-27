import { BPItem } from "../../bedrock/item/BPItem"
import { MCFood } from "../../bedrock/item/components"
import { CoreItem } from "../../bedrock/item/CoreItem"
import { RPItem } from "../../bedrock/item/RPItem"
import { Identifier } from "../../bedrock/shared/Identifier"

export class ItemBuilder {
	constructor(private options: ItemBuilderOptions) {}

	public build(): CoreItem {
		const opt = this.options
		return {
			customFilePath: opt.customFolder ? `${opt.customFolder}/${opt.identifier.removeNamespace()}` : undefined,
			createBP(): BPItem {
				return {
					format_version: "1.16.0",
					MCItem: {
						description: {
							identifier: opt.identifier,
							category: opt.category,
						},
						components: {
							MCFoil: opt.foil,
							MCFood: opt.food,
							MCHandEquipped: opt.handEquipped,
							MCMaxStackSize: opt.maxStack,
							MCUseDuration: opt.useDuration,
						},
					},
				}
			},
			createRP(): RPItem {
				return {
					format_version: "1.10.0",
					MCItem: {
						description: {
							identifier: opt.identifier,
							category: opt.category,
						},
						components: {
							MCIcon: opt.icon ?? opt.identifier.removeNamespace(),
						},
					},
				}
			},
		}
	}
}

export interface ItemBuilderOptions {
	identifier: Identifier
	customFolder?: string
	category?: string
	foil?: boolean
	food?: MCFood
	handEquipped?: boolean
	icon?: string
	maxStack?: number
	useDuration?: number
}
