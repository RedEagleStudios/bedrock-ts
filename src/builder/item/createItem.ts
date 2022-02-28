import { BPItem } from "../../bedrock/item/BPItem"
import { MCFood } from "../../bedrock/item/components"
import { CoreItem } from "../../bedrock/item/CoreItem"
import { RPItem } from "../../bedrock/item/RPItem"
import { Identifier } from "../../bedrock/shared/Identifier"

export interface CreateItemOptions {
	dir?: string
	identifier: Identifier
	category?: string
	foil?: boolean
	food?: MCFood
	handEquipped?: boolean
	icon?: string
	maxStack?: number
	useDuration?: number
}

export function createItem(opt: CreateItemOptions): CoreItem {
	return {
		dir: opt.dir,
		identifier: opt.identifier,
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
						MCUseAnimation: opt.food ? "eat" : undefined,
					},
				},
			}
		},
	}
}
