import { LootTable } from "./LootTable"

export interface CoreLootTable {
	dir?: string
	fileName: string
	create(): LootTable
}
