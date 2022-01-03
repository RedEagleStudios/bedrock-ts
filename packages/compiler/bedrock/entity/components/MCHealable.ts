export interface MCHealableItem {
	heal_amount?: number
	item?: string
}

export interface MCHealable {
	items: MCHealableItem[]
}
