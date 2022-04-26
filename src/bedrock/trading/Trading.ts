import { RangeObject } from "../../types/RangeObject"
import { ItemIdentifier } from "../shared/ItemIdentifier"

export interface TradeTableItemInfo {
	item: ItemIdentifier
	quantity?: number | RangeObject
	functions?: object[] // TODO: Add functions interface
}

export interface TradeTable {
	wants?: TradeTableItemInfo[]
	gives?: TradeTableItemInfo[]
	max_uses?: number
	reward_exp?: boolean
	trader_exp?: number
}

export interface TradingGroup {
	num_to_select?: number
	trades?: TradeTable[]
}

export interface TradingTier {
	trades?: TradeTable[]
	groups?: TradingGroup[]
	total_exp_required?: number
}

export interface Trading {
	tiers: TradingTier[]
}
