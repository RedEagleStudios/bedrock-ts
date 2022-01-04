export interface MCBehavior_PickUpItems {
	can_pickup_any_item?: boolean
	can_pickup_to_hand_or_equipment?: boolean
	cooldown_after_being_attacked?: number
	goal_radius?: number
	max_dist?: number
	pickup_based_on_chance?: boolean
	priority?: number
	speed_multiplier?: number
	track_target?: boolean
}
