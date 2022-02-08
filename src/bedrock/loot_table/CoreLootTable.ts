import { LootTable } from "./LootTable"

export interface CoreLootTable {
	fileName: string
	createLootTable(): LootTable
}
