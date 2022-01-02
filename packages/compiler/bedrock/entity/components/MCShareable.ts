export interface MCShareable {
	all_items?: boolean
	all_items_max_amount?: number
	all_items_surplus_amount?: number
	all_items_want_amount?: number
	items?: MCShareableItem[]
}

export interface MCShareableItem {
	admire?: boolean
	barter?: boolean
	consume_item?: boolean
	craft_into?: string
	item?: string
	item_aux?: number
	max_amount?: number
	pickup_limit?: number
	priority?: number
	stored_in_inventory?: boolean
	surplus_amount?: number
	want_amount?: number
}
