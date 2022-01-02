import { EventTrigger } from "../events/EventTrigger"

export interface MCTamemount {
	attemptTemperMod?: number
	feedText?: string
	maxTemper?: number
	minTemper?: number
	rideText?: string
	autoRejectItems?: MCTamemountAutoRejectItem[]
	feedItems?: MCTamemountFeedItem[]
	tameEvent?: EventTrigger
}

export interface MCTamemountAutoRejectItem {
	item?: string
}

export interface MCTamemountFeedItem {
	item?: string
	temperMod?: number
}
