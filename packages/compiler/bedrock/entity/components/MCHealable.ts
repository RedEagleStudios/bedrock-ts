import { Filters } from "../filters"

export interface MCHealable {
	filters?: Filters[]
	forceUse?: boolean
	items?: MCHealableItem[]
}

export interface MCHealableItem {
	item?: string
	healAmount?: number
}
