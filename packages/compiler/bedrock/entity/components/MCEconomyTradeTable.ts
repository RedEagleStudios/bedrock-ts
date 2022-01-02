import { Vector2 } from "../../../types/Vector"

export interface MCEconomyTradeTable {
	convertTradesEconomy?: boolean
	curedDiscount?: Vector2
	displayName?: string
	heroDemandDiscount?: number
	maxCuredDiscount?: Vector2
	maxNearbyCuredDiscount?: number
	nearbyCuredDiscount?: number
	newScreen?: boolean
	persistTrades?: boolean
	showTradeScreen?: boolean
	table?: string
	useLegacyPriceFormula?: boolean
}
