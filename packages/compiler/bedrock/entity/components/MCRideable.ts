export interface MCRideable {
	controlling_seat?: number
	crouching_skip_interact?: boolean
	family_types?: string[]
	interact_text?: string
	pull_in_entities?: boolean
	rider_can_interact?: boolean
	seat_count: number
	seats: MCRideableSeats[]
}
