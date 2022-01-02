import { Filters } from "../filters"

export interface MCHealable {
	filters?: Filters[]
	force_use?: boolean
	items?: MCHealableItem[]
}

export interface MCHealableItem {
	item?: string
	heal_amount?: number
}
