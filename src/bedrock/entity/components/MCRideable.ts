import { Vector3 } from "../../../types"

export interface MCRideableSeats {
	lock_rider_rotation?: number
	max_rider_count?: number
	min_rider_count?: number
	position: Vector3
	rotate_rider_by?: number
}

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
