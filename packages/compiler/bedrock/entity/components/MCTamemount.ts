export interface MCTamemountAutoRejectItem {
	item: string
}

export interface MCTamemountFeedItem {
	item: string
	temper_mod: number
}

export interface MCTamemount {
	auto_reject_items: MCTamemountAutoRejectItem[]
	feed_items: MCTamemountFeedItem[]
	feed_text: string
	max_temper: number
	min_temper: number
	ride_text: string
}
