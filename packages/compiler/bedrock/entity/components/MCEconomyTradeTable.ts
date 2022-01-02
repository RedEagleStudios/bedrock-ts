import { Vector2 } from "../../../types/Vector"

export interface MCEconomyTradeTable {
	convert_trades_economy?: boolean
	cured_discount?: Vector2
	display_name?: string
	hero_demand_discount?: number
	max_cured_discount?: Vector2
	max_nearby_cured_discount?: number
	nearby_cured_discount?: number
	new_screen?: boolean
	persist_trades?: boolean
	show_trade_screen?: boolean
	table?: string
	use_legacy_price_formula?: boolean
}
