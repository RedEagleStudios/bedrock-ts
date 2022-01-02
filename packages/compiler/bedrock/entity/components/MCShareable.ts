export interface MCShareable {
	allItems?: boolean
	allItemsMaxAmount?: number
	allItemsSurplusAmount?: number
	allItemsWantAmount?: number
	items?: MCShareableItem[]
}

export interface MCShareableItem {
	admire?: boolean
	barter?: boolean
	consumeItem?: boolean
	craftInto?: string
	item?: string
	itemAux?: number
	maxAmount?: number
	pickupLimit?: number
	priority?: number
	storedInInventory?: boolean
	surplusAmount?: number
	wantAmount?: number
}
