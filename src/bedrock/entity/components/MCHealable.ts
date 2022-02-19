import { ItemIdentifier } from "../../shared/ItemIdentifier"

export interface MCHealableItem {
	heal_amount?: number
	item: ItemIdentifier
}

export interface MCHealable {
	items: MCHealableItem[]
}
