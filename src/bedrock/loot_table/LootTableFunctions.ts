import { CountRange } from "../../types/CountRange"

interface SetCount {
	function: "set_count"
	count: number | CountRange
}

interface SetDamage {
	function: "set_damage"
	damage: number | CountRange
}

interface SetData {
	function: "set_data"
	data: number | CountRange
}

export type LootTableFunction = SetCount | SetDamage | SetData
