import { ItemIdentifier } from "../shared/ItemIdentifier"
import { LootTableFunction } from "./LootTableFunctions"

interface ItemEntry {
	type: "item"
	name: ItemIdentifier
	weight: number
	functions?: LootTableFunction[]
}

interface EmptyEntry {
	type: "empty"
	weight: number
}

export type LootTableEntry = EmptyEntry | ItemEntry

export interface LootTablePool {
	rolls: number
	entries: LootTableEntry[]
}

export interface LootTable {
	pools: LootTablePool[]
}
