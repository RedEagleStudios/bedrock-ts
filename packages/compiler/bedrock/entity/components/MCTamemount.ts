import { EventTrigger } from "../events/EventTrigger"

export interface MCTamemount {
	attempt_temper_mod?: number
	feed_text?: string
	max_temper?: number
	min_temper?: number
	ride_text?: string
	auto_reject_items?: MCTamemountAutoRejectItem[]
	feed_items?: MCTamemountFeedItem[]
	tame_event?: EventTrigger
}

export interface MCTamemountAutoRejectItem {
	item?: string
}

export interface MCTamemountFeedItem {
	item?: string
	temper_mod?: number
}
