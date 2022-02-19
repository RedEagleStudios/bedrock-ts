import { Identifier } from "../shared/Identifier"
import { ItemIdentifier } from "../shared/ItemIdentifier"

type FormatVersion = "1.12.0"

export type MCRecipeTag =
	| "blast_furnace"
	| "brewing_stand"
	| "campfire"
	| "cartography_table"
	| "crafting_table"
	| "furnace"
	| "material_reducer"
	| "smoker"
	| "soul_campfire"
	| "stonecutter"

export interface MCRecipeItem {
	count?: number
	data?: number
	item: ItemIdentifier
}

export interface MCRecipeItemRecord {
	[key: string]: MCRecipeItem
}

export interface MCRecipeDescription {
	identifier: Identifier
}

export interface MCRecipeBrewing {
	description: MCRecipeDescription
	input?: Identifier
	output?: Identifier
	reagent?: Identifier
	tags?: MCRecipeTag[]
}

export interface MCRecipeFurnace {
	description: MCRecipeDescription
	input?: Identifier
	output?: Identifier
	tags?: MCRecipeTag[]
}

export interface MCRecipeShaped {
	description: MCRecipeDescription
	group?: string
	key?: MCRecipeItemRecord
	pattern?: string[]
	result?: MCRecipeItem
	tags?: MCRecipeTag[]
}

export interface MCRecipeShapeless {
	description: MCRecipeDescription
	group?: string
	ingredients?: MCRecipeItem[]
	priority?: number
	result?: MCRecipeItem
	tags?: MCRecipeTag[]
}

export interface Recipe {
	format_version: FormatVersion
	MCRecipeBrewingContainer?: MCRecipeBrewing
	MCRecipeBrewingMix?: MCRecipeBrewing
	MCRecipeFurnace?: MCRecipeFurnace
	MCRecipeShaped?: MCRecipeShaped
	MCRecipeShapeless?: MCRecipeShapeless
}
