export interface MCBehavior_PickUpItems {
	canPickupAnyItem?: boolean
	canPickupToHandOrEquipment?: boolean
	cooldownAfterBeingAttacked?: number
	goalRadius?: number
	maxDist?: number
	pickupBasedOnChance?: boolean
	priority?: number
	speedMultiplier?: number
	trackTarget?: boolean
}
