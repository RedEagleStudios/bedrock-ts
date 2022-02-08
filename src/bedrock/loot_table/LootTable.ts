import { Identifier } from "../shared/Identifier"
import { LootTableFunctions } from "./LootTableFunctions"

export interface LootTable {
	pools: [
		{
			rolls: number
			entries: [
				{
					type: "item"
					name: Identifier
					weight: number
					functions?: LootTableFunctions
				}
			]
		}
	]
}
