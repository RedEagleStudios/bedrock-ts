export interface MCInventory {
	additional_slots_per_strength?: number
	can_be_siphoned_from?: boolean
	container_type?: "container" | "hopper" | "horse" | "inventory" | "minecart_chest" | "minecart_hopper"
	inventory_size?: number
	private?: boolean
	restrict_to_owner?: boolean
}
