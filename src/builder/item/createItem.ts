import { BPItem } from "../../bedrock/item/BPItem"
import { MCFood } from "../../bedrock/item/components"
import { CoreItem } from "../../bedrock/item/CoreItem"
import { RPItem } from "../../bedrock/item/RPItem"
import { Identifier } from "../../bedrock/shared/Identifier"

export interface CreateItemOptions {
	dir?: string
	identifier: Identifier
	category?: "Equipment" | "Items" | "Nature"
	foil?: boolean
	food?: MCFood
	handEquipped?: boolean
	icon?: string
	maxDamage?: number
	maxStack?: number
	useDuration?: number
	useAnimation?: "drink" | "eat" | "none"
}

export function createItem(item: CreateItemOptions): CoreItem {
	return {
		dir: item.dir,
		identifier: item.identifier,
		createBP(): BPItem {
			return {
				format_version: "1.16.0",
				MCItem: {
					description: {
						identifier: item.identifier,
					},
					components: {
						MCFoil: item.foil,
						MCFood: item.food,
						MCHandEquipped: item.handEquipped,
						MCMaxDamage: item.maxDamage,
						MCMaxStackSize: item.maxStack,
						MCUseDuration: item.useDuration,
					},
				},
			}
		},
		createRP(): RPItem {
			return {
				format_version: "1.10.0",
				MCItem: {
					description: {
						identifier: item.identifier,
						category: item.category,
					},
					components: {
						MCIcon: item.icon ?? item.identifier.removeNamespace(),
						MCUseAnimation: item.useAnimation,
					},
				},
			}
		},
	}
}
