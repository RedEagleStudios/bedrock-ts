import { Range } from "../../../types/Range"

export interface MCEconomyTradeTable {
  convert_trades_economy?: boolean
  cured_discount?: Range
  display_name?: string
  hero_demand_discount?: number
  max_cured_discount?: Range
  max_nearby_cured_discount?: number
  nearby_cured_discount?: number
  new_screen?: boolean
  persist_trades?: boolean
  show_trade_screen?: boolean
  table?: string
  use_legacy_price_formula?: boolean
}
