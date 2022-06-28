import { RangeObject } from "../../types/RangeObject"

interface SetCount {
  function: "set_count"
  count: number | RangeObject
}

interface SetDamage {
  function: "set_damage"
  damage: number | RangeObject
}

interface SetData {
  function: "set_data"
  data: number | RangeObject
}

export type LootTableFunction = SetCount | SetDamage | SetData
