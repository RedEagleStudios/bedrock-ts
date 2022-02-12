interface MinMaxValue {
	min: number
	max: number
}

interface SetCount {
	function: "set_count"
	count: number | MinMaxValue
}

interface SetDamage {
	function: "set_damage"
	damage: number | MinMaxValue
}

interface SetData {
	function: "set_data"
	data: number | MinMaxValue
}

export type LootTableFunction = SetCount | SetDamage | SetData
