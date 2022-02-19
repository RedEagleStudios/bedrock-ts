import { ItemIdentifier } from "../../shared/ItemIdentifier"

export interface MCTamemountAutoRejectItem {
	item: ItemIdentifier
}

export interface MCTamemountFeedItem {
	item: ItemIdentifier
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
