export interface MCTameMountAutoRejectItem {
	item: string
}

export interface MCTameMountFeedItem {
	item: string
	temper_mod: number
}

export interface MCTameMount {
	auto_reject_items: MCTameMountAutoRejectItem[]
	feed_items: MCTameMountFeedItem[]
	feed_text: string
	max_temper: number
	min_temper: number
	ride_text: string
}
